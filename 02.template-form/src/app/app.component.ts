import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'template-form';

  @ViewChild(LoginComponent)
  loginComponent: LoginComponent;

  ngAfterViewInit() {
    // this.loginComponent.submit();
  }
}
