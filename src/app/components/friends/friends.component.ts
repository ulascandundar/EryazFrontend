import { LocalstorageService } from 'src/app/services/localstorage.service';
import { UserService } from './../../services/user.service';
import { UserProfile } from './../../models/userProfile';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  users:UserProfile[];
  filterText=""
  constructor(private userService:UserService,private localStorageService:LocalstorageService) { }

  ngOnInit(): void {
  }

  getFollowing(){
    
    this.userService.getFollowing(this.localStorageService.getIdDecodeToken()).subscribe(userss=>{
      this.users=userss.data;
      console.log(userss.data)
    })
  }
  getFollowers(){
    
    this.userService.getFollowers(this.localStorageService.getIdDecodeToken()).subscribe(userss=>{
      this.users=userss.data;
      console.log(userss.data)
    })
  }

}
