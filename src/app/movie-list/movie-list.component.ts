import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movies: any = []
  @Output() selectMovie = new EventEmitter();
  @Output() editedMovie = new EventEmitter();
  @Output() movie = new EventEmitter();
  @Output() deletedMovie = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  movieClicked(movie:any){
    //console.log(movie)
    this.selectMovie.emit(movie)
  }

  editMovie(movie: any){
    this.editedMovie.emit(movie);
  }

  newMovie(){
    this.movie.emit()
  }

  deleteMovie(movie: any){
    this.deletedMovie.emit(movie)
  }

}
