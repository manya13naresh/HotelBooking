import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/core/services/jwt.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private jwtService:JwtService) { }
  loginData(value:any){
    console.log(value)
    this.http.post("http://localhost:9000/admin/adminlogin",{email: value.email ,password: value.password})
    .subscribe(
      (response:any)=>{
        console.log("Log in Success")
          this.jwtService.saveJwtToken(response.jwtToken)
          this.jwtService.saveRefreshToken(response.refreshToken)
          alert("Admin Log in Success")
         this.router.navigate(['adminaddlocation'])
        
    },(error)=>{
      console.log(error)
    //  this.router.navigate(['adminaddlocation']) 
    } )
  }
  ngOnInit(): void {
  }

}
