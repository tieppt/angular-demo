import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'product',
    // component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/product/list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':category',
        component: DetailComponent
      }
    ]
  }
];

@NgModule({
  declarations: [ListComponent, DetailComponent, LayoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ProductModule {}
