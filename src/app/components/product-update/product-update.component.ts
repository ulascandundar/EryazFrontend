import { AppComponent } from './../../app.component';
import { ProductComponent } from './../product/product.component';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  prod:Product
  
  categories:Category[]=[];
  productAddForm : FormGroup;
  constructor(public dialogRef:MatDialogRef<ProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private formBuilder:FormBuilder, 
    private productService:ProductService, private toastrService:ToastrService,
    private productComp:ProductComponent,private categoryService:CategoryService,
    private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   
      this.createProductAddForm();
      this.prod=this.data
      this.getAllCategories();
      console.log(this.prod)
      
      
      
      

      
  
  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      name:["",Validators.required],
      price: ["",Validators.required],
      categoryId:["",Validators.required]
    })
 }
 getAllCategories(){
  this.categoryService.getCategories().subscribe(response=>{
    this.categories=response.data

  })
}
update(){
  if(this.productAddForm.valid){
    let productModel = Object.assign({},this.productAddForm.value)
    productModel.id=this.prod.id
    this.productService.update(productModel).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
      this.productComp.ngOnInit()
      
    
      
    },responseError=>{
      console.log(this.productAddForm)
      if(responseError.error.Errors.length>0){
        for (let i = 0; i <responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage
            ,"Doğrulama hatası")
        }       
      } 
    })
    
  }else{
    this.toastrService.error("Formunuz eksik","Dikkat")
   
  }
  
}

}
