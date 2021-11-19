import { WelcomeComponent } from './../customer/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  { path: '', component: CustomerComponent,
  children:[
    {path:'welcome',component:WelcomeComponent},
    {path:'welcome/category/:categoryId',component:WelcomeComponent}
  ]  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
