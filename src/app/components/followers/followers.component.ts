import { UserProfile } from './../../models/userProfile';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  users:UserProfile[];
  constructor( private userService:UserService,private localStorageService:LocalstorageService ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    
    this.userService.getFollowers(this.localStorageService.getIdDecodeToken()).subscribe(userss=>{
      this.users=userss.data;
      console.log(userss.data)
    })
  }

}
