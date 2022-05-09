import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

SigninData(data:any){
  console.log(data);
  this.http.post("http://localhost:3000/register",{username:data.username,email:data.email,password:data.password})
  .subscribe(
    (msg)=>{
    console.log(msg+"success")
    this.router.navigate(['login'])
  },(error)=>{
    //console.log(error)
    this.router.navigate(['login'])
  })

   
  
  
}

  

  ngOnInit(): void {
  }

}
