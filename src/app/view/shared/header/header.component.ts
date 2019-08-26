import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() public titulo:string = "";
  @Output() public salir = new EventEmitter<boolean>();

  public usuario:any;
  constructor() { 
    this.usuario = JSON.parse(localStorage.getItem('info'));
  }
  ngOnInit() {
  }

  sendMessageToParent(msn: boolean){
    console.log(msn)
    return this.salir.emit(msn);
  }
}
