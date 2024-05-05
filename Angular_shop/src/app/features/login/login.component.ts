import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(
    private router: Router,
    private authSerrvice: AuthService
  ) {}


  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.email, this.password);
    this.authSerrvice.login(this.email, this.password);
  }
}