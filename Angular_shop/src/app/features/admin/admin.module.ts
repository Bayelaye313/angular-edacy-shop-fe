import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path:'',
        redirectTo:'admin-produits',
        pathMatch: 'full'
      },
      {
        path:'admin-produits',
        component: AdminPageComponent
      }
    ])
  ]
})
export class AdminModule { }
