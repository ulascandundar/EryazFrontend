import { ProductUpdateComponent } from './../product-update/product-update.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductAddComponent } from '../product-add/product-add.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
 export class ProductComponent implements OnInit {

  product:Product
  products: Product[] = [];
  dataLoaded=false;
  public loading = false;
  filterText=""
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute,
    private toastrSerivce:ToastrService,private dialogRef:MatDialog ) { }

  ngOnInit(): void {

    this.productService.refreshNeeded.subscribe(()=>{
      this.getProducts();
    }) ;
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
        console.log(this.products)
      }else{
        this.getProducts()
      }
      
    })
  }
  setProduct(product:Product){
    this.product=product
  }



  getProducts() {
    this.loading=true;

    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded=true;
      this.loading=false
      
    })   
  }
  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.loading=false;
      this.products = response.data
      this.dataLoaded = true;
      console.log(response.data)
      
    })   
  }

  openDialog():void{
    this.dialogRef.open(ProductUpdateComponent,{
      data:{
        id:this.product.id,
        name:this.product.name,
        categoryId:this.product.categoryId,
        price:this.product.price
      }
    });

  }
  openDialogg(){
    this.dialogRef.open(ProductAddComponent);
  }


}
