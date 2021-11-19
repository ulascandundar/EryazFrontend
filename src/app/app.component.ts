import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  /**
   *
   */
  result:boolean
  constructor(private authService:AuthService) {
  }
  ngOnInit(): void {
    this.result=this.authService.isAuthenticated();
  }
  /**
   *
   */
 
  
  title = 'eryaz';
  products1: Product[] = [];
  product1:Product;
}
