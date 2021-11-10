import { ToastrService } from 'ngx-toastr';
import { MessageService } from './../../../services/message.service';
import { MessageForCreateDto } from './../../../models/messageForCreateDto';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css']
})
export class MessageCreateComponent implements OnInit {

  @Input() recipientId:number;
  @Input() senderId:number;
  messageAddForm : FormGroup;
  constructor(private activeModal:NgbActiveModal,private messageService:MessageService, private toastrService:ToastrService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    console.log(this.recipientId)
    console.log(this.senderId)
    this.createMessageAddForm()
  }
  createMessageAddForm(){
    this.messageAddForm = this.formBuilder.group({
      text:["",Validators.required],
    })
 }

  closeModal(){
    this.activeModal.close();
  }

  sendMessage()
  {
    let messageModal=Object.assign({},this.messageAddForm.value)
    messageModal.recipientId=this.recipientId
    messageModal.senderId=this.senderId
    this.messageService.createMessage(messageModal).subscribe(response=>{
      this.toastrService.success("Mesaj Gönderildi")
    })
    //this.message.recipientId=this.recipientId
    //this.message.senderId=this.senderId
    //this.messageService.createMessage(this.message);

  }

}
