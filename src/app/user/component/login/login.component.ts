import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtService } from '../../../core/services/jwt.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private jwtService:JwtService) { }
  loginData(value:any){
    console.log(value)
    this.http.post("http://localhost:9000/login",{email: value.email ,password: value.password})
    .subscribe(
      (response:any)=>{
        console.log("Log in Success")
        this.jwtService.saveJwtToken(response.jwtToken)
        this.jwtService.saveRefreshToken(response.refreshToken)
        alert("Log in Success")
        this.router.navigate(['home'])
        
    },(error)=>{
      console.log(error)
      
    //  this.router.navigate(['home']) 
    } )
  }

  ngOnInit(): void {
  }

}
