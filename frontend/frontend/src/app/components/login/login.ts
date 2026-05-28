import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './login.html',

  styleUrls: ['./login.css']
})
export class LoginComponent {

  user = {

    email: '',

    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {

    this.authService
      .login(this.user)
      .subscribe(token => {

        this.authService.saveToken(token);

        alert('Login Successful');

        this.router.navigate(['/policy']);
      });
  }
}