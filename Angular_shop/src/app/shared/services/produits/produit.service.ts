import { Injectable } from '@angular/core';
import { SimpleProduct } from '../../interfaces/produit.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, combineLatest, of, retry, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  public produits!: SimpleProduct[];
  apiUrl= 'http://localhost:3000/';
  endpoint = 'produits';
  endpointService = 'services'
  urlService = this.apiUrl + this.endpointService
  url = this.apiUrl + this.endpoint


  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<any[]>{
    return this.http.get<SimpleProduct[]>(this.url).pipe(
      tap(produits=>{
      console.log(produits)}),
      retry(3),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    )}

    getMyService() {
      return this.http.get<SimpleProduct[]>(this.url).pipe(
        tap((prod)=>console.log('before', prod)),
        switchMap((prod)=>(this.http.get<any[]>(this.urlService + "/" + prod[0].id))),
        tap((prod) => console.log('after switch', prod))
      )
    }
    getProduitsEtServices() {
      combineLatest([
        this.http.get<SimpleProduct[]>(this.url),
        this.http.get<any[]>(this.apiUrl + this.endpointService)
      ]).pipe().subscribe((data) => {
        const prod = data[0]
        const services = data[1];
      })
    }
}

