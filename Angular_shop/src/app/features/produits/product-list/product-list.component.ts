import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { SimpleProduct } from '../../../shared/interfaces/produit.interface';
import { createProducts } from '../../../shared/donnees/produits.generate';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy {
  produits!: SimpleProduct[];
  prodRef!: Subscription
  constructor(
  ) {}

  ngOnInit(): void {
    }


  isPromo(product: SimpleProduct) {

  }


  addToCart(product: SimpleProduct) {

  }


  logout() {
  }


  ngOnDestroy(): void {
  }
}