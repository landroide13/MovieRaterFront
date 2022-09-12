import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movies: any = [];
  selectedMovie = null;
  editMovie: any;

  constructor(private api:ApiService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.api.getMovies().subscribe(data => {
      this.movies = data
     },
     error => console.log(error)
     )
  }

  selectMovie(movie:any){
    this.selectedMovie = movie
    this.editMovie = null
  }

  editedMovie(movie: any){
    this.editMovie = movie
    this.selectedMovie = null
  }

  createNewMovie(){
    this.editMovie = {title: '', description: ''}
    this.selectedMovie = null
  }

  deletedMovie(movie: any){
    console.log("movie", movie)
    this.api.deleteMovie(movie.id).subscribe(
      res => {
        console.log(res);
        this.movies = this.movies.filter((mov: any) => mov.id !== movie.id)
      },
      error => console.log(error)
     )
  }

  movieCreated(movie: any){
    this.movies.push(movie)
  }

  movieUpdated(movie: any){
    const idx = this.movies.findIndex((mov: any) => mov.id === movie.id)
    if(idx >= 0){
      this.movies[idx] = movie
    }
  }

  logout(){
    this.cookie.delete('mv-token')
  }




}
