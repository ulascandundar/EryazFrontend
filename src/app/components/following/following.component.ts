import { UserProfile } from './../../models/userProfile';
import { UserService } from './../../services/user.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  users:UserProfile[];
  constructor(private userService:UserService,private localStorageService:LocalstorageService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    
    this.userService.getFollowing(this.localStorageService.getIdDecodeToken()).subscribe(userss=>{
      this.users=userss.data;
      console.log(userss.data)
    })
  }

}
