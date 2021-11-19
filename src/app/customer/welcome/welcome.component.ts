import { ActivatedRoute } from '@angular/router';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  product:Product

  products: Product[] = [];
  categories : Category[]=[];
  currentCategory :Category;
  
  constructor(private categoryService:CategoryService,private productService:ProductService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
    console.log(this.products)
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
        console.log(this.products)
      }else{
        //this.getProducts()
      }
      
    })
  }
  getCategories() {
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data
    })   
  }
  setCurrentCategory(category:Category){
    this.currentCategory = category;
    console.log(this.currentCategory)
    console.log(this.products)
  }

  
  alphabeticalOrder(){
    this.products.sort((a, b) => a.name.localeCompare(b.name));
    console.log(this.products);
  }

  cheapOrding(){
    this.products.sort((a, b) => Number(a.price) - Number(b.price));
  }

  expensiveOrding(){
    this.products.sort((a, b) => Number(b.price) - Number(a.price));
  }

  getCurrentCategoryClass(category:Category){
    if(category ==this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllCategoryClass(){
       if(!this.currentCategory){
        return "list-group-item active"
       }
       else{
        return "list-group-item"
       }
  }

  getProducts() {

    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      
    })   
  }

  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products = response.data
      console.log(response.data)
      
    })   
  }
  



}
