import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

enum roles{
  USER,
  ADMIN
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }

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
    this.router.navigate(['/login']);

  }
  isLogged(){
    const user = localStorage.getItem('user');
    console.log('Guard appele', !!user);
    return !!user
  }

}
