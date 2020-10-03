import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title: string;
  closeBtnName: string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
