import { Component, OnInit } from '@angular/core';
import { concatMap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(res => (this.users = res));
  }

  delete(user: User) {
    this.userService
      .deleteUser(user.id)
      .pipe(concatMap(_ => this.userService.getUsers()))
      .subscribe(res => (this.users = res));
  }
}
