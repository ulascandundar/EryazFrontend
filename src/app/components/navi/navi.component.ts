import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductAddComponent } from '../product-add/product-add.component';
@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private dialogRef:MatDialog) { }

  ngOnInit(): void {
  }

  

}
