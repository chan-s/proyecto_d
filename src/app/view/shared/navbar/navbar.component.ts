import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public usuario:any;
  constructor() { 
    this.usuario = JSON.parse(localStorage.getItem('info'));
  }

  ngOnInit() {
    // this.userData = this.authService.appUserProfile
    // console.log(this.userData);
  }
}
