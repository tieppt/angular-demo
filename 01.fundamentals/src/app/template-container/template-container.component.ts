import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss']
})
export class TemplateContainerComponent implements OnInit {
  arr = [1, 2, 3, 4, 5];
  editMode = false;
  constructor() {}

  ngOnInit() {}
}
