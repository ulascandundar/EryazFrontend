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
  {path:"products", component:ProductComponent,canActivate:[LoginGuard]},
  {path:"products/category/:categoryId", component:ProductComponent,canActivate:[LoginGuard]},
  {path:"products/:id", component:ProductComponent,canActivate:[LoginGuard]},
  {path:"users", component:UserProfilesComponent,canActivate:[LoginGuard]},
  {path:"users/:id", component:UserDatailComponent,canActivate:[LoginGuard]},
  {path:"user/update", component:UserUpdateComponent,canActivate:[LoginGuard]},
  {path:"add", component:AdminAddComponent,canActivate:[LoginGuard]},
  {path:"followers", component:FollowersComponent,canActivate:[LoginGuard]},
  {path:"following", component:FollowingComponent,canActivate:[LoginGuard]},
  {path:"friends", component:FriendsComponent,canActivate:[LoginGuard]},
  {path:"inbox", component:InboxComponent,canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:"reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
