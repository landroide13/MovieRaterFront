import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private api: ApiService, private cookie: CookieService, private router: Router) { }

  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit(): void {
    const mvtoken = this.cookie.get('mv-token')
    if(mvtoken){
      this.router.navigate(['/movies'])
    }
  }

  saveForm(){
    this.api.loginUser(this.authForm.value).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(['/movies']);
        this.cookie.set('mv-token', res.token);
      },
      err => console.log(err)
    )
    console.log(this.authForm.value)
  }

}
