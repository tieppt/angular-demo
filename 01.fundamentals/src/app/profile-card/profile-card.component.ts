import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';

interface IUser {
  name: string;
  title: string;
  tel: string;
  email: string;
  address: string;
}

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.ShadowDom
  encapsulation: ViewEncapsulation.Emulated
})
export class ProfileCardComponent implements OnInit {
  @Input()
  user: IUser;

  @Output()
  deleted = new EventEmitter<IUser>();

  html = `
  <p>text text</p>
  `;
  constructor() {}

  ngOnInit() {}

  delete() {
    this.deleted.emit(this.user);
  }
}
