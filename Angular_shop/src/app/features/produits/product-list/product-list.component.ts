import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, first, last, lastValueFrom, takeUntil, tap } from 'rxjs';
import { SimpleProduct } from '../../../shared/interfaces/produit.interface';
import { createProducts } from '../../../shared/donnees/produits.generate';
import { AuthService } from '../../../shared/services/auth.service';
import { ProduitService } from '../../../shared/services/produits/produit.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy {
  produits!: SimpleProduct[];
  prodRef!: Subscription;
  destroy$ = new Subject();
  constructor(private authservice:AuthService,
    private produitservice: ProduitService
  ) {}

  ngOnInit(): void {
    this.prodRef = this.produitservice.fetchProducts().subscribe(
      //(p)=>this.produits = p
      (p)=>{this.getProds();});
    this.authservice.getStatus().pipe(
      tap((state)=>console.log('status',state))
    ).subscribe();

    //this.produitservice.getMyService().subscribe()
    }

    async getProds(){
      try {
        this.produits = await lastValueFrom(
          this.produitservice.fetchProducts().pipe(
            takeUntil(this.destroy$),
            first(),
          )
        )
        
      } catch (err) {
        console.error(err)
      }
    }


  isPromo(product: SimpleProduct) {

  }


  addToCart(product: SimpleProduct) {

  }


  logout() {
    this.authservice.logOut()
  }


  ngOnDestroy(): void {
    this.prodRef.unsubscribe();
    this.destroy$.next(null)
  }
}