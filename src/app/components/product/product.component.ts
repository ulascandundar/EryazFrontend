import { ProductUpdateComponent } from './../product-update/product-update.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductAddComponent } from '../product-add/product-add.component';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { data } from 'jquery';
declare const $:any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
 export class ProductComponent implements OnInit,AfterViewInit {

  product:Product

  products: Product[] = [];
  dataLoaded=false;
  public loading = false;
  
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute,
    private toastrSerivce:ToastrService,private dialogRef:MatDialog ) { }

    @ViewChild('dTable',{static:false}) dataTable;
    ngAfterViewInit():void{
      setTimeout(()=>{ 
        $(this.dataTable.nativeElement).dataTable({
          pagingType: 'full_numbers',
                pageLength: 10,
                processing: true,
                lengthMenu : [5, 10, 25],
                order:[[1,"desc"]],
               
                "language":{
                  "url":"//cdn.datatables.net/plug-ins/1.10.12/i18n/Turkish.json"
                  },
                  dom: 'Bfrtip',
                  buttons: [
                    'copy', 'csv', 'excel', 'print','pdf'
                ]
        });
        
        },200)
    }
  ngOnInit(): void {
    

    this.products=[];
    this.getProducts();
    this.productService.refreshNeeded.subscribe(()=>{
     this.getProducts();
      console.log(this.products)
    }) ;

    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
        console.log(this.products)
      }else{
        //this.getProducts()
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
