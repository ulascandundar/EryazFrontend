import { UserProfile } from './../../models/userProfile';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.css']
})
export class UserProfilesComponent implements OnInit {

  users:UserProfile[];
  constructor( private userService:UserService,private localStorageService:LocalstorageService ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    
    this.userService.getUserProfiles(this.localStorageService.getIdDecodeToken()).subscribe(userss=>{
      this.users=userss.data;
      console.log(userss.data)
    })
  }

}
