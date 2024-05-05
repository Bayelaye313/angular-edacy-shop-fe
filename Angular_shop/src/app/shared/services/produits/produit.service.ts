import { Injectable } from '@angular/core';
import { SimpleProduct } from '../../interfaces/produit.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  public produits!: SimpleProduct[];
  apiUrl= 'http://localhost:3000/';
  endpoint = 'produits';
  url = this.apiUrl + this.endpoint


  constructor(private http: HttpClient) { }

  fetchProducts(){
    return this.http.get<SimpleProduct[]>(this.url).pipe(
      tap(produits=>{
      console.log(produits)}))}
}
