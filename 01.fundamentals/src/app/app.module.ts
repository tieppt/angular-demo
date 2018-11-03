import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { TimerComponent } from './timer/timer.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { TreeComponent } from './tree/tree.component';
import { ColorBlockComponent } from './color-block/color-block.component';
import { UserFormComponent } from './user-form/user-form.component';
import { TemplateContainerComponent } from './template-container/template-container.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { FdatePipe } from './fdate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProfileCardComponent,
    TimerComponent,
    SlideShowComponent,
    TreeComponent,
    ColorBlockComponent,
    UserFormComponent,
    TemplateContainerComponent,
    DemoPipeComponent,
    FdatePipe
  ],
  imports: [BrowserModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
