import { SingleResponseModel } from './../models/singleResponseModel';
import { ListResponseModel } from './../models/listResponseModel';
import { tap } from 'rxjs/operators';
import { ResponseModel } from './../models/responseModel';
import { MessageForCreateDto } from './../models/messageForCreateDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  apiUrl = 'https://localhost:44306/api/';
  constructor(private httpClient: HttpClient) { }
  
  private _refreshNeeded=new Subject<void>();

  get refreshNeeded(){
    return this._refreshNeeded;
  }

  createMessage(message:MessageForCreateDto):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Messages/createmessage",message).pipe(
      tap(() =>  {
        this._refreshNeeded.next();
      })
    );
  }

  getInbox(userId:number):Observable<ListResponseModel<Message>>{
    let newPath = this.apiUrl + "messages/getinbox?userId="+userId
    return this.httpClient.get<ListResponseModel<Message>>(newPath);
  }

  showMessage(messageId:number):Observable<SingleResponseModel<Message>>{
    let newPath = this.apiUrl + "messages/showmessage?messageId="+messageId
    return this.httpClient.get<SingleResponseModel<Message>>(newPath);
  }
}
