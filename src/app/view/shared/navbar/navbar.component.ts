import { Component, OnInit } from '@angular/core';

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
  }
}
