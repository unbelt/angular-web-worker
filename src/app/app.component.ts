import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <button (click)="runWorker(1000)">Run Web Worker</button> `,
})
export class AppComponent {
  private worker?: Worker;

  constructor() {
    document.addEventListener(
      'visibilitychange',
      () => {
        if (document.hidden) {
          this.runWorker(5000);
        } else {
          this.worker?.terminate();
        }
      },
      false
    );
  }

  runWorker(timeout: number) {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('./app.worker', import.meta.url));

      this.worker.onmessage = ({ data }) => console.log(data);

      this.worker.postMessage({ timeout });
    } else {
      console.log('Web Workers are not supported in this environment');
    }
  }
}
