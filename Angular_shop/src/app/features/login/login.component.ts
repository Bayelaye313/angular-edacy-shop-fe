import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email: FormControl = new FormControl("", [Validators.email, Validators.required]);
  password!: string;

  constructor(
    private router: Router,
    private authSerrvice: AuthService
  ) {}


  ngOnInit(): void {
  }

  testMail(){
    console.log('errors',this.email.errors);
    console.log('value', this.email.value)
    console.log('isMailvalid', this.email.valid)
    console.log('isdisable', this.email.disabled)
    console.log('isenable', this.email.enabled)

  }

  setEmail(){
    /**mettre une val par defaut depuis template */
     this.email.setValue('bayelaye@gmail.com')
  }
  handleActivation(){
    /*enlever les validateurs */
    this.email.clearValidators();
    this.email.updateValueAndValidity()
    /**tets disable */
    //this.email.disabled ? this.email.enable() : this.email.disable()
  }

  onSubmit() {
    console.log(this.email, this.password);
    //this.authSerrvice.login(email, this.password);
  }
}