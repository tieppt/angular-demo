import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {
  show = true;
  url: string;
  constructor() {}

  ngOnInit() {}

  toggle() {
    this.show = !this.show;
  }

  onChange(event) {
    this.url = event.target.value;
  }
}
