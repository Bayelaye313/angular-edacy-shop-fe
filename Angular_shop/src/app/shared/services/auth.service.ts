import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

enum roles{
  USER,
  ADMIN
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }

  //test observable instanciation
  loginStatus$= new BehaviorSubject(false);

  getStatus(){
    return this.loginStatus$.asObservable();
  }
  private setStatus(stat:boolean){
    this.loginStatus$.next(stat);
  }
  login(mail:string, password:string){
    const listOfMails = ['bayelaye0510@gmail.com', "biramegueye3@gmail.com"];
    const passChecked = "passer";

    if (listOfMails.includes(mail) && password === passChecked) {
      const data = {mail: mail, role: roles.USER};
      localStorage.setItem("user", JSON.stringify(data));
      this.router.navigate(['/produits']);
    }else {
      alert('Email ou mot de passe incorrect');
    }

  }
  logOut(){
    localStorage.clear();
    this.setStatus(false);
    this.router.navigate(['/login']);

  }
  isLogged(){
    const user = localStorage.getItem('user');
    console.log('Guard appele', !!user);
    this.setStatus(true);
    return !!user
  }

}
