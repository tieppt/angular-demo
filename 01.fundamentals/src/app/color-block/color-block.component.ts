import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-color-block',
  templateUrl: './color-block.component.html',
  styleUrls: ['./color-block.component.scss']
})
export class ColorBlockComponent implements OnInit, OnDestroy {
  colors = ['red', 'green', 'blue'];
  color = this.colors[0];
  id = 0;
  timer: any;
  style = {
    backgroundColor: '',
    borderRadius: null
  };
  constructor() {}

  ngOnInit() {
    this.timer = setInterval(() => {
      this.color = this.colors[this.id % 3];
      this.style.backgroundColor = this.color;
      this.style.borderRadius = this.id % 2 === 0 ? '50%' : '';
      this.id++;
      console.log(this.color);
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
