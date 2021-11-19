import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-refresh',
  templateUrl: './password-refresh.component.html',
  styleUrls: ['./password-refresh.component.css']
})
export class PasswordRefreshComponent implements OnInit {

  refreshForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService, private toastrService:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.createRefreshForm()
  }
  createRefreshForm(){
    this.refreshForm = this.formBuilder.group({
      email: ["",Validators.required]
    })
  }

  passwordRefresh(){
    let refreshModel = Object.assign({},this.refreshForm.value)
    this.authService.passwordRefresh(refreshModel.email).subscribe(response=>{
      this.toastrService.success("Şifreniz yenilendi ve mail olarak gönderildi")
    })
  }
}
