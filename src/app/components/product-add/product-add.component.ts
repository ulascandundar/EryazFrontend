import { ImageService } from './../../services/image.service';
import { CategoryService } from './../../services/category.service';
import { ProductComponent } from './../product/product.component';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/models/category';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  selectedFile: File
  path:String;
  categories:Category[]=[];
  productAddForm : FormGroup;
  constructor(private formBuilder:FormBuilder, 
    private productService:ProductService, private toastrService:ToastrService,
    private productComp:ProductComponent,private categoryService:CategoryService,private imageService:ImageService) { }

  ngOnInit(): void {
    this.createProductAddForm();
    this.getAllCategories();
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]

  }
  onUpload(){
    const uploadData = new FormData();
    uploadData.append("image",this.selectedFile,this.selectedFile.name);

    this.imageService.add(uploadData).subscribe(response=>{
      this.path=response.message
      this.toastrService.success(response.message,"Fotoğraf yüklendi")
      console.log(this.path)
    },responseError=>{
      this.toastrService.error(responseError.message,"Fotoğraf yüklenemedi")
      console.log(uploadData)
    })
  }

  createProductAddForm(){
     this.productAddForm = this.formBuilder.group({
       name:["",Validators.required],
       price: ["",Validators.required],
       categoryId:["",Validators.required],
       stock:["",Validators.required]
     })
  }

  getAllCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories=response.data
      console.log("kategoriler")
      console.log(this.categories)
    })
  }

  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({},this.productAddForm.value)
      productModel.path=this.path
      this.productService.add(productModel).subscribe(response=>{
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
      console.log(this.productAddForm)
    }
    
  }

}