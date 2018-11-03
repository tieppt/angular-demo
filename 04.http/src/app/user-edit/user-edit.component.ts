import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRole } from '../user';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  id: number;
  editForm: FormGroup;
  roles: UserRole[] = ['admin', 'supermod', 'user'];
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.editForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      role: ['', [Validators.required]],
      email: ['', [Validators.required]],
      image: ['']
    });
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(user => {
      this.editForm.patchValue(user);
    });
  }

  onSubmit() {
    const { valid, value } = this.editForm;
    if (valid) {
      this.userService.updateUser(this.id, value).subscribe(_ => {
        this.router.navigate(['/users']);
      });
    } else {
      console.error('invalid');
    }
  }
}
