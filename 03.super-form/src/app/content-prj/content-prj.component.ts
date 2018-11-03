import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-prj',
  templateUrl: './content-prj.component.html',
  styleUrls: ['./content-prj.component.scss']
})
export class ContentPrjComponent implements OnInit {
  @Input()
  alertType = 'success';
  constructor() {}

  ngOnInit() {}
}
