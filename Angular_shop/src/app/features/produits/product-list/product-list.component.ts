import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
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
  prodRef!: Subscription
  constructor(private authservice:AuthService,
    private produitservice: ProduitService
  ) {}

  ngOnInit(): void {
    this.prodRef = this.produitservice.fetchProducts().subscribe(
      (p)=>this.produits = p
    );
    this.authservice.getStatus().pipe(
      tap((state)=>console.log('status',state))
    ).subscribe();

    //this.produitservice.getMyService().subscribe()
    }


  isPromo(product: SimpleProduct) {

  }


  addToCart(product: SimpleProduct) {

  }


  logout() {
    this.authservice.logOut()
  }


  ngOnDestroy(): void {
    this.prodRef.unsubscribe()
  }
}