import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

function comparePassword(c: AbstractControl): ValidationErrors | null {
  const value = c.value;
  const { password, confirmPassword } = value;
  if (password !== confirmPassword) {
    return {
      passwordNotMatch: true
    };
  }
  return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const fb = this.fb;
    this.registerForm = fb.group({
      email: [
        '',
        [Validators.required, Validators.minLength(6), Validators.email]
      ],
      pass: fb.group(
        {
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
        },
        {
          validator: [comparePassword]
        }
      )
    });

    this.registerForm
      .get('pass.password')
      .valueChanges.subscribe(value => console.log('ahihi: ' + value));

    setTimeout(() => {
      this.registerForm.patchValue({
        email: 'tiepphan'
      });
    }, 5000);
  }

  onSubmit() {
    console.log(this.registerForm);
  }
}
