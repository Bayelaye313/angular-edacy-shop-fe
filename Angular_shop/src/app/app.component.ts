import { Component, OnInit } from "@angular/core";
import { createProduct, createProducts } from "./shared/donnees/produits.generate";
import { SimpleProduct } from "./shared/interfaces/produit.interface";


@Component({
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  selector: 'app-root',
})
export class AppComponent implements OnInit {
  public productCache!: SimpleProduct[];
  public produits!: SimpleProduct[];
  public produit: SimpleProduct = createProduct();
  public message = 'Acceuil - Recherche';
  private pr = "test";
  constructor() {}

  // Avant de demmarrer fais ceci
  public ngOnInit() {

    this.produits = createProducts(36);
    this.productCache = this.produits;
  }

  public isPromo(produit: SimpleProduct): boolean {
    return produit.promo;
  }

  public addToCart(prod: SimpleProduct) {
    console.log(prod);
  }

  public filtrerProduits(text: string) {
    this.handleFiltering(text.toLowerCase());
  }

  private handleFiltering(t: string) {
    if(t === null || !t.length) {
      this.produits = this.productCache;
    }else{
      const searchText = t.toLowerCase();
      this.produits = this.productCache.filter((_produit)=>{
        const productName = _produit.name.toLowerCase();
        return productName.includes(searchText);
      })
    }

  }
}