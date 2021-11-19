import { NewPasswordComponent } from './components/new-password/new-password.component';
import { PasswordRefreshComponent } from './components/password-refresh/password-refresh.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { FriendsComponent } from './components/friends/friends.component';
import { FollowingComponent } from './components/following/following.component';
import { FollowersComponent } from './components/followers/followers.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserDatailComponent } from './components/user-datail/user-datail.component';
import { AdminAddComponent } from './components/admin-add/admin-add.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { UserProfilesComponent } from './components/user-profiles/user-profiles.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductComponent,canActivate:[LoginGuard]},
  {path:"admin/products", component:ProductComponent,canActivate:[LoginGuard]},
  {path:"admin/products/category/:categoryId", component:ProductComponent,canActivate:[LoginGuard]},
  {path:"admin/products/:id", component:ProductComponent,canActivate:[LoginGuard]},
  {path:"admin/users", component:UserProfilesComponent,canActivate:[LoginGuard]},
  {path:"admin/users/:id", component:UserDatailComponent,canActivate:[LoginGuard]},
  {path:"admin/user/update", component:UserUpdateComponent,canActivate:[LoginGuard]},
  {path:"admin/add", component:AdminAddComponent,canActivate:[LoginGuard]},
  {path:"admin/followers", component:FollowersComponent,canActivate:[LoginGuard]},
  {path:"admin/following", component:FollowingComponent,canActivate:[LoginGuard]},
  {path:"admin/friends", component:FriendsComponent,canActivate:[LoginGuard]},
  {path:"admin/inbox", component:InboxComponent,canActivate:[LoginGuard]},
  {path:"admin/newpassword", component:NewPasswordComponent,canActivate:[LoginGuard]},
  {path:"admin/passwordrefresh", component:PasswordRefreshComponent},
  {path:"admin/login", component:LoginComponent},
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) }
];
//newpassword
@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:"reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
