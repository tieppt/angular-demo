import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddComponent } from './product/add/add.component';
import { SearchComponent } from './search/search.component';
import { ContentPrjComponent } from './content-prj/content-prj.component';
import { CardComponent } from './card/card.component';
import { ProductModule } from './product/product.module';
import { TinhTuoiComponent } from './tinh-tuoi/tinh-tuoi.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'tinh-tuoi',
    component: TinhTuoiComponent
  },
  {
    path: 'order',
    loadChildren: './order/order.module#OrderModule'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddComponent,
    SearchComponent,
    ContentPrjComponent,
    CardComponent,
    TinhTuoiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ProductModule,
    RouterModule.forRoot(routes, {
      enableTracing: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
