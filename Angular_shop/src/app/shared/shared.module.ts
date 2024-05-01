import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { ResusableButtonsComponent } from './components/resusable-buttons/resusable-buttons.component';


@NgModule({
  declarations: [
    SearchComponent,
    ResusableButtonsComponent,
  ],
  imports: [
    CommonModule, 
  ],
  exports: [
    SearchComponent,
    ResusableButtonsComponent,
  ],
})
export class SharedModule { }