import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

SigninData(data:any){
  if(data.confirmpassword==data.password){
  this.http.post("http://localhost:9000/register",{username:data.username,email:data.email,password:data.password})
  .subscribe(
    (response:any)=>{
    console.log("Sign In Success")
    this.router.navigate(['login'])
  },(error)=>{
    console.log(error)    
//this.router.navigate(['login']) 
  })

   
} 
  
}

  

  ngOnInit(): void {
  }

}
