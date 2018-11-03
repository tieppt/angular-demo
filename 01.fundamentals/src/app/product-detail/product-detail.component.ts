import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  img: string;
  temp: string;

  constructor() {}

  ngOnInit() {
    this.img =
      'https://cdn.newsapi.com.au/image/v1/67a523605bca40778c6faaad93883a3b';
  }

  onChange(event) {
    this.temp = event.target.value;
  }

  update() {
    this.img = this.temp;
  }
}
