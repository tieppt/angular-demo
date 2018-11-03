import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.scss']
})
export class DemoPipeComponent implements OnInit {
  product = {
    name: 'quan ao thu dong',
    price: 500000,
    image:
      'https://cdn.newsapi.com.au/image/v1/67a523605bca40778c6faaad93883a3b',
    date: new Date()
  };
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.product.price = 20000;
      this.product.date.setFullYear(2010);
      console.log(this.product.date);
    }, 5000);
  }
}
