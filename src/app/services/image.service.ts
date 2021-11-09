import { SingleResponseModel } from './../models/singleResponseModel';
import { ResponseModel } from './../models/responseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl = 'https://localhost:44306/api/';
  constructor(private httpClient: HttpClient) { }
  add(file:FormData):Observable<SingleResponseModel<String>>{
    return this.httpClient.post<SingleResponseModel<string>>(this.apiUrl+"images/addimg",file)
  }
}
