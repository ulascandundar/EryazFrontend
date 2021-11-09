import { LocalstorageService } from './../../services/localstorage.service';
import { UserToUserService } from './../../services/user-to-user.service';
import { UserToUser } from './../../models/userToUser';
import { UserProfile } from './../../models/userProfile';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-datail',
  templateUrl: './user-datail.component.html',
  styleUrls: ['./user-datail.component.css']
})
export class UserDatailComponent implements OnInit {

  followText:string="Takip et"
  user:UserProfile
  userToUser:UserToUser
  constructor(private userService:UserService, private toastor:ToastrService,
     private route:ActivatedRoute,private userToUserService:UserToUserService,private localStorageService:LocalstorageService) { }

  ngOnInit(): void {
    this.getUser()
    console.log(this.user)
    console.log(this.user)
  }

  getUser(){
    this.userService.get(+this.route.snapshot.params["id"]).subscribe(user=>{
        this.user=user.data
    },responseError=>{
      this.toastor.error(responseError)
    })
  }

  followUser(userId:number){
    var followeId=this.localStorageService.getIdDecodeToken()
    this.userToUserService.follow(userId,followeId).subscribe(result=>{
      this.toastor.success(result.message)
      this.followText="Takip ediyorsunuz"
    },errorResponse=>{
      this.toastor.error(errorResponse.error.message)
    })
  }

}
