import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  movieForm: any;

  @Output() movieCreated = new EventEmitter();
  @Output() movieUpdated = new EventEmitter();


  id:any;

  @Input() set movie(val: any){
    this.id = val.id
    console.log(this.id)
    this.movieForm = new FormGroup({
      title: new FormControl(val.title),
      description: new FormControl(val.description)
    })
  }

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  saveForm(){
    console.log(this.movieForm.value)
    if(this.id){
      this.api.updateMovie(this.id, this.movieForm.value.title, this.movieForm.value.description).subscribe(
        res => this.movieUpdated.emit(res),
        err => console.log(err)
      )
    }else{
      this.api.createMovie(this.movieForm.value.title, this.movieForm.value.description).subscribe(
        res => this.movieCreated.emit(res),
        err => console.log(err)
      )
    }
  }

}
