import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { delay, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  //email: FormControl = new FormControl("", [Validators.email, Validators.required]);
  form:FormGroup = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl([Validators.minLength(6), Validators.required]),

  })
  constructor(
    private router: Router,
    private authSerrvice: AuthService
  ) {}

  get email(){
    return this.form?.get('email') as FormControl
  }
  get password(){
    return this.form?.get('password') as FormControl
  }

  ngOnInit(): void {
    this.email.valueChanges.pipe(
      delay(3000),
      tap(console.log)
    ).subscribe()
  }

  // testMail(){
  //   console.log('errors',this.email.errors);
  //   console.log('value', this.email.value)
  //   console.log('isMailvalid', this.email.valid)
  //   console.log('isdisable', this.email.disabled)
  //   console.log('isenable', this.email.enabled)

  // }

  // setEmail(){
  //   /**mettre une val par defaut depuis template */
  //    this.email.setValue('bayelaye@gmail.com')
  // }
  // handleActivation(){
  //   /*enlever les validateurs */
  //   this.email.clearValidators();
  //   this.email.updateValueAndValidity()
  //   /**tets disable */
  //   //this.email.disabled ? this.email.enable() : this.email.disable()
  // }

  onSubmit() {
    console.log(this.email, this.password);
    this.authSerrvice.login(this.email.value, this.password.value);
  }
}