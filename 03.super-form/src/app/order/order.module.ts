import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      {
        path: '',
        redirectTo: 'checkout',
        pathMatch: 'full'
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      }
    ]
  }
];

@NgModule({
  declarations: [OrderComponent, CheckoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class OrderModule {}
