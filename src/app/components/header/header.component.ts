import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openLoginModal(): void {
    this.bsModalRef = this.modalService.show(LoginComponent, Object.assign({}, { class: 'login-modal' }));
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
