import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  info = {
    username: '',
    password: ''
  };
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.info = {
        username: 'tiep',
        password: '123456'
      };
    }, 2000);
  }

  onSubmit(form) {
    console.log(form);
  }
}
