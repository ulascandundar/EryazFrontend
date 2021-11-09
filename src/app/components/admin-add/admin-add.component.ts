import { AuthService } from 'src/app/services/auth.service';
import { ImageService } from './../../services/image.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  selectedFile: File
  path:String;
  adminForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private imageService:ImageService,
     private toastrService:ToastrService,private authService:AuthService) { }

  ngOnInit(): void {
    this.createForm();
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

  createForm(){
    this.adminForm=this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      fav:["",Validators.required],
      status:[true],
      password:["",Validators.required]
    })
  }
  add(){
    if(this.adminForm.valid){
      let adminModel=Object.assign({},this.adminForm.value)
      adminModel.path=this.path;
      this.authService.add(adminModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      })
    }
  }
}
