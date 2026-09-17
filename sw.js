/* eslint-disable no-restricted-globals */
// 《流式输出是响应头控制的吗》一文的实验后端。
// 只拦截 /blog/streamlab/* 的 fetch，在浏览器内生成流式响应；其余请求一律放行，
// 不注册任何缓存。与文章组件 StreamLab.jsx 中各页签 <details> 展示的源码片段保持同步。
const BASE = '/blog/streamlab/';

const STORY =
  '持续显示新内容，需要服务端及时提供、链路及时转发、客户端及时处理并渲染。缓冲可能增加延迟，仅设置响应头并不足够。';

const SSE_HEADERS = {
  'Content-Type': 'text/event-stream',
  'Cache-Control': 'no-cache',
  'X-Accel-Buffering': 'no',
};
const PLAIN_HEADERS = { 'Content-Type': 'text/plain; charset=utf-8' };

const EXPERIMENTS = {
  a: { headers: SSE_HEADERS, mode: 'sse' },
  b: { headers: SSE_HEADERS, mode: 'fake' },
  c: { headers: PLAIN_HEADERS, mode: 'plain' },
  d: { headers: SSE_HEADERS, mode: 'openai' },
  e: { headers: PLAIN_HEADERS, mode: 'sse' },
  f: { headers: SSE_HEADERS, mode: 'garbage' },
};

function textChunks(text, n) {
  const size = Math.ceil(text.length / n);
  const out = [];
  for (let i = 0; i < text.length; i += size) out.push(text.slice(i, i + size));
  return out;
}

function formatChunk(mode, c, i) {
  if (mode === 'sse') return 'data: ' + JSON.stringify({ i: i, delta: c }) + '\n\n';
  if (mode === 'plain') return c + '\n';
  if (mode === 'openai')
    return 'data: ' + JSON.stringify({
      object: 'chat.completion.chunk',
      choices: [{ index: 0, delta: { content: c } }],
    }) + '\n\n';
  if (mode === 'garbage') return c + '——没有 data: 前缀，也没有空行\n';
  return c;
}

function makeResponse(exp) {
  const enc = new TextEncoder();
  const chunks = textChunks(STORY, 10);
  const stream = new ReadableStream({
    start(controller) {
      if (exp.mode === 'fake') {
        // 实验 B：静默 3 秒后一次 enqueue 全部内容（与 A 一字不差的头）
        setTimeout(function () {
          var body = chunks
            .map(function (c, i) { return formatChunk('sse', c, i); })
            .join('') + 'data: [DONE]\n\n';
          controller.enqueue(enc.encode(body));
          controller.close();
        }, 3000);
        return;
      }
      // 其余实验：每 300ms enqueue 一块——「服务端逐块 write」
      let i = 0;
      const timer = setInterval(function () {
        if (i === chunks.length) {
          clearInterval(timer);
          if (exp.mode === 'sse' || exp.mode === 'openai') {
            controller.enqueue(enc.encode('data: [DONE]\n\n'));
          }
          controller.close();
          return;
        }
        controller.enqueue(enc.encode(formatChunk(exp.mode, chunks[i], i)));
        i++;
      }, 300);
    },
  });
  return new Response(stream, { headers: exp.headers });
}

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  const url = new URL(event.request.url);
  // 只处理本站 /blog/streamlab/* 下的请求，其余一律放行（走默认网络）
  if (url.origin !== self.location.origin || !url.pathname.startsWith(BASE)) return;
  const key = url.pathname.slice(BASE.length).split('/')[0];
  const exp = EXPERIMENTS[key];
  if (!exp) {
    event.respondWith(new Response('not found', { status: 404 }));
    return;
  }
  event.respondWith(makeResponse(exp));
});
