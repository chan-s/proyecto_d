import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  public async login(){
    this.authService.isLoginSuccess = await this.authService.signIn();

    if (this.authService.isLoginSuccess) {
      this.router.navigate(['/inicio']);
    }
  }
}
