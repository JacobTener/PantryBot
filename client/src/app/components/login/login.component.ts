import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
  }
  
  test(){
    this.http.post<any>('http://localhost:3000/api/auth', {"email":"jake@email.com", "password":"test"}).subscribe(data => {
      console.log(data)
    })
  }
}
