import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() public titulo:string; 
  @Output() public logot = new EventEmitter<string>();


  public usuario:any;
  constructor() { 
    this.usuario = JSON.parse(localStorage.getItem('info'));
  }
  ngOnInit() {
  }

}
