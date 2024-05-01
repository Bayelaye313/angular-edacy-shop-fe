import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { ResuableButtonsComponent } from './components/resusable-buttons/resusable-buttons.component';


@NgModule({
  declarations: [
    SearchComponent,
    ResuableButtonsComponent,
  ],
  imports: [
    CommonModule, 
  ],
  exports: [
    SearchComponent,
    ResuableButtonsComponent,
  ],
})
export class SharedModule { }