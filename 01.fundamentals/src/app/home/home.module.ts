import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AvatarComponent } from './avatar/avatar.component';
@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, AvatarComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
