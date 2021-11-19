import { LocalstorageService } from './../../services/localstorage.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  refreshForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService, private toastrService:ToastrService,private router:Router,
     private localStorageService:LocalstorageService, private toastor:ToastrService) { }

  ngOnInit(): void {
    this.createRefreshForm()
  }

  createRefreshForm(){
    this.refreshForm = this.formBuilder.group({
      password: ["",Validators.required]
    })
  }

  passwordRefresh(){
    let refreshModel = Object.assign({},this.refreshForm.value)
    console.log(refreshModel.password)
    this.authService.passwordReset(this.localStorageService.getIdDecodeToken(),refreshModel.password).subscribe(result=>{
      this.toastor.success("Şifre değiştirildi")

    })
  }
}
