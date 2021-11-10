import { FriendsFilterPipe } from './pipes/friends-filter.pipe';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ToastrModule } from 'ngx-toastr';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UserProfilesComponent } from './components/user-profiles/user-profiles.component';
import { AdminAddComponent } from './components/admin-add/admin-add.component';
import { UserDatailComponent } from './components/user-datail/user-datail.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { FollowersComponent } from './components/followers/followers.component';
import { FollowingComponent } from './components/following/following.component';
import { FriendsComponent } from './components/friends/friends.component';
import { NgxLoadingModule } from 'ngx-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageCreateComponent } from './components/messages/message-create/message-create.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { MessageDetailComponent } from './components/message-detail/message-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    FriendsFilterPipe,
    ProductAddComponent,
    ProductUpdateComponent,
    LoginComponent,
    WelcomeComponent,
    UserProfilesComponent,
    AdminAddComponent,
    UserDatailComponent,
    UserUpdateComponent,
    FollowersComponent,
    FollowingComponent,
    FriendsComponent,
    MessageCreateComponent,
    InboxComponent,
    MessageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
       {
         positionClass:"toast-bottom-right"
       }
    ),
    NgxLoadingModule.forRoot({}),
    NgbModule
  ],
  providers: [ProductComponent,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
