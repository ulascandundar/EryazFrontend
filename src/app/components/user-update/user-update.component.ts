import { LocalstorageService } from './../../services/localstorage.service';
import { LoginComponent } from './../login/login.component';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../services/user.service';
import { UserProfile } from './../../models/userProfile';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user:UserProfile
  constructor(private userService:UserService,
     private toast:ToastrService, private localStorageService:LocalstorageService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    //console.log(this.localStorageService.getIdDecodeToken())
    this.userService.get(this.localStorageService.getIdDecodeToken()).subscribe(user=>{
      this.user=user.data
    })
  }
  updateUser(){
    this.userService.updateNoPassword(this.user).subscribe(response=>{
      this.toast.success("Güncellendi")
    })
  }
}
