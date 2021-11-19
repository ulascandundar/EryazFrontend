import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [
    CustomerComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    PaginationModule.forRoot(),
  ]
})
export class CustomerModule { }
