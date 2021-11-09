import { UserForRegister } from './../models/userForRegister';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenn:any;
  apiUrl = 'https://localhost:44306/api/auth/';
  jwtHelper=new JwtHelperService();
  constructor(private httpClient:HttpClient,private router:Router) { }

  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel).pipe(
      map((response:any)=>{
        const result=response;
        localStorage.setItem("token",result.data.token)
        this.tokenn=this.jwtHelper.decodeToken(result.data.token)
        console.log(this.tokenn)
      
      })
    )
  }
  add(userForRegister:UserForRegister):Observable<SingleResponseModel<TokenModel>>{
    let newPath = this.apiUrl + "register";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,userForRegister)
    
  }
//localStorage.setItem("token",response.data.token)
  

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }



}