import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { ResuableButtonsComponent } from './components/resusable-buttons/resusable-buttons.component';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchComponent,
    ResuableButtonsComponent,
    ...MAT_COMPONENTS,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
})
export class SharedModule { }