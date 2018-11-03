import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar, [app-avatar]',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  image = 'https://avatars3.githubusercontent.com/u/7151365?s=460&v=4';
  constructor() {}

  ngOnInit() {}
}
