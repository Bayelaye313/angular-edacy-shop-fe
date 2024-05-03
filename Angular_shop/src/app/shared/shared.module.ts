import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { ResuableButtonsComponent } from './components/resusable-buttons/resusable-buttons.component';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';

const MAT_COMPONENTS = [
  MatInputModule,
  MatMenuModule
]

@NgModule({
  declarations: [
    SearchComponent,
    ResuableButtonsComponent,
  ],
  imports: [
    CommonModule,
    ...MAT_COMPONENTS,
    FormsModule 
  ],
  exports: [
    SearchComponent,
    ResuableButtonsComponent,
    ...MAT_COMPONENTS,
    FormsModule
  ],
})
export class SharedModule { }