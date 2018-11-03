import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { map, concatMap } from 'rxjs/operators';
import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User;
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.activatedRoute.paramMap
    //   .pipe(
    //     map(params => +params.get('id')),
    //     concatMap(id => this.userService.getUser(id))
    //   )
    //   .subscribe(user => (this.user = user));
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => (this.user = user));
  }
}
