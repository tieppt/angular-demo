import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  active = true;
  constructor() {}

  ngOnInit() {}

  toggle() {
    this.active = !this.active;
  }
}
