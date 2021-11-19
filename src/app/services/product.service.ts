import { ListResponseModel } from './../models/listResponseModel';
import { Product } from 'src/app/models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44306/api/';

  constructor(private httpClient: HttpClient) { }

  private _refreshNeeded=new Subject<void>();

  get refreshNeeded(){
    return this._refreshNeeded;
  }

  getProducts():Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getlistbycategory?categoryId="+categoryId
    console.log(newPath)
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product,).pipe(
      tap(() =>  {
        this._refreshNeeded.next();
      })
    );
  }

  update(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/update",product).pipe(
      tap(() =>  {
        this._refreshNeeded.next();
      })
    );
  }


    
  
}