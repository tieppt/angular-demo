import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  private _remaining: number;
  private timerId: any;
  @Input('time')
  get remaining() {
    return this._remaining;
  }
  set remaining(v: any) {
    v = +v;
    if (Number.isNaN(v)) {
      this._remaining = 10;
    } else {
      this._remaining = v;
      if (!this.timerId) {
        this.start();
      }
    }
  }

  @Output()
  ended = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {
    if (!this.timerId) {
      this.start();
    }
  }
  start() {
    this.timerId = setInterval(() => {
      if (this.remaining > 0) {
        this.remaining--;
      } else {
        clearInterval(this.timerId);
        this.timerId = 0;
        this.ended.emit(true);
      }
    }, 1000);
  }
}
