import { Router } from '@angular/router';
import { MessageDetailComponent } from './../message-detail/message-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from './../../services/message.service';
import { LocalstorageService } from './../../services/localstorage.service';
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  messages:Message[]
  message:Message
  constructor(private localStorageService:LocalstorageService,private messageService:MessageService,
    private toastrSerivce:ToastrService,private dialogRef:MatDialog,private router: Router) { }

  ngOnInit(): void {
    this.getInbox();
  }

  getInbox(){
    this.messageService.getInbox(this.localStorageService.getIdDecodeToken()).subscribe(response=>{
      this.messages=response.data
      console.log(this.localStorageService.getClaimsDecodeToken())
    })
  }

  showMessage(messageId:number){
    this.messageService.showMessage(messageId).subscribe(response=>{
      this.message=response.data
      this.dialogRef.open(MessageDetailComponent,{
        data:{text:response.data.text}
      })
      
    })
  }

  deleteMethod(messageId:number) {
    this.messageService.deleteMessage(messageId).subscribe(response=>{
      this.router.navigate(['/inbox'])
      
  .then(() => {
    window.location.reload();
  });
  
      this.toastrSerivce.warning("Mesaj Silindi");
    })
    console.log("silindi")
    this.toastrSerivce.warning("Mesaj Silindi");
  }

}


