import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const productRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: ProductListComponent,
      },
      {
        path: ':id',
        component: ProductDetailComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,

  ],
  imports: [
    RouterModule.forChild(productRoutes),
    CommonModule,
    SharedModule
  ],
})
export class ProduitsModule { }
