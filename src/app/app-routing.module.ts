import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductComponent,canActivate:[LoginGuard]},
  {path:"products", component:ProductComponent,canActivate:[LoginGuard]},
  {path:"products/category/:categoryId", component:ProductComponent,canActivate:[LoginGuard]},
  {path:"products/:id", component:ProductComponent,canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:"reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
