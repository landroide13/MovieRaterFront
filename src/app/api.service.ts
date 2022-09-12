import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000/api/movies/';
  url = 'http://localhost:8000/';
  
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private  http: HttpClient, private cookie: CookieService) { }


  getMovies(){
    return this.http.get(this.baseUrl, {headers: this.headers})
  }

  getMovie(id: number){
    return this.http.get(`${this.baseUrl}${id}/`, {headers: this.headers})
  }

  createMovie(title: string, description: string){
    const body = JSON.stringify({title: title, description: description});
    return this.http.post(`${this.baseUrl}`, body, {headers: this.getAuthHeaders()})
  }

  updateMovie(id: number, title: string, description: string){
    const body = JSON.stringify({title: title, description: description});
    return this.http.put(`${this.baseUrl}${id}/`, body, {headers: this.getAuthHeaders()})
  }

  deleteMovie(id: number){
    return this.http.delete(`${this.baseUrl}${id}/`, {headers: this.getAuthHeaders()})
  }
    
  rateMovie(rate: number, movieId: number){
    const body = JSON.stringify({stars: rate});
    return this.http.post(`${this.baseUrl}${movieId}/rate_movie/`, body, {headers: this.getAuthHeaders()})
  }

  loginUser(authData: any){
    const body = JSON.stringify(authData);
    return this.http.post(`${this.url}auth/`, body, {headers: this.headers})
  }

  getAuthHeaders(){
    const token = this.cookie.get('mv-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    })
  }


}
















