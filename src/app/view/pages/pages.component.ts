import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

declare var App: any

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})

export class PagesComponent implements OnInit {

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit() {
  }

  async isLogOut(event) {
    //TO DO
     if (confirm('¿Está seguro de cerrar su sesión?')) {
      localStorage.clear();

        this.router.navigate(['/login'])   
    }
  }
}
