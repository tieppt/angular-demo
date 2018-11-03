import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRole } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  create: FormGroup;
  roles: UserRole[] = ['admin', 'supermod', 'user'];
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.create = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      role: ['', [Validators.required]],
      email: ['', [Validators.required]],
      image: ['']
    });
  }

  onSubmit() {
    const { valid, value } = this.create;
    if (valid) {
      this.userService.createUser(value).subscribe(_ => {
        this.router.navigate(['/users']);
      });
    } else {
      console.error('invalid');
    }
  }
}
