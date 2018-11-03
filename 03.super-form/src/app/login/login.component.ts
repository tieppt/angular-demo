import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // this.loginForm = new FormGroup({
    //   username: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(3)
    //   ]),
    //   pass: new FormControl('', [Validators.required, Validators.minLength(3)])
    // });
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      pass: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    console.log('submited');
    console.log(this.loginForm);
  }
}
