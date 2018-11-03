import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  category: string;
  scate: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.category = params.get('category');
      console.log(this.category, params);
    });
    const snapshot = this.activatedRoute.snapshot;
    this.scate = snapshot.paramMap.get('category');
  }

  onClick() {
    this.router.navigate(['/product', 'nu-01']);
  }
}
