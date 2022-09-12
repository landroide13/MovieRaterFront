import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MovieFormComponent } from '../movie-form/movie-form.component';
import { MovieListComponent } from '../movie-list/movie-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MainComponent,
    MovieDetailsComponent,
    MovieFormComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
