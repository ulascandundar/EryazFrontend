import { ResponseModel } from './../models/responseModel';
import { UserForRegister } from './../models/userForRegister';
import { UserProfile } from './../models/userProfile';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://localhost:44306/api/';
  constructor(private httpClient: HttpClient) { }
  getUserProfiles(userId:number):Observable<ListResponseModel<UserProfile>> {
    let newPath = this.apiUrl + "users/getall?userId="+userId
    return this.httpClient.get<ListResponseModel<UserProfile>>(newPath);
  }

  get(id:number):Observable<SingleResponseModel<UserProfile>>{
    let newPath = this.apiUrl + "users/get?id="+id
    return this.httpClient.get<SingleResponseModel<UserProfile>>(newPath)
  }

  updateNoPassword(datas:UserProfile):Observable<ResponseModel>{
    let newPath = this.apiUrl + "auth/updatenopassword";
    return this.httpClient.post<ResponseModel>(newPath,datas)
  }

  getFollowers(userId:number):Observable<ListResponseModel<UserProfile>>{
    let newPath = this.apiUrl + "users/getfollowers?id="+userId;
    return this.httpClient.get<ListResponseModel<UserProfile>>(newPath);
  }

  getFollowing(userId:number):Observable<ListResponseModel<UserProfile>>{
    let newPath = this.apiUrl + "users/getfollowing?id="+userId;
    return this.httpClient.get<ListResponseModel<UserProfile>>(newPath);
  }
 
}



