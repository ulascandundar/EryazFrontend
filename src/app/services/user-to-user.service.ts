import { Observable } from 'rxjs';
import { UserToUser } from './../models/userToUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class UserToUserService {
  apiUrl = 'https://localhost:44306/api/usertouser/';
  constructor(private httpClient: HttpClient) { }
  follow(userId:number,followerId:number):Observable<ResponseModel>{
    let newPath = this.apiUrl +"follow"
    return this.httpClient.post<ResponseModel>(newPath+"?userId="+userId+"&followerId="+followerId,{})
  }
}
//https://localhost:44306/api/UserToUser/follow?userId=2&followerId=3