/// <reference lib="webworker" />

addEventListener('message', (event: MessageEvent) => {
  console.log(`Web Worker start: ${event.data.timeout}`);

  setTimeout(() => postMessage('Web Worker done'), event.data.timeout);
});
