import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <h2> {{message}} </h2>
  <app-avatar></app-avatar>

  <div app-avatar></div>

  `
})
export class HomeComponent {
  message = 'Hello from Home';

  constructor() {
    setTimeout(() => {
      this.message = 'xin chao viet nam';
    }, 2000);
  }
}
