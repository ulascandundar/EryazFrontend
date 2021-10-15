import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  
  title = 'eryaz';
  products1: Product[] = [];
  product1:Product;
}
