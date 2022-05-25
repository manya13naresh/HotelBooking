import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../../../core/services/logout.service';
import { LogoutComponent } from '../logout/logout.component';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  

  constructor(private httpclient:HttpClient,private router:Router,private logoutService:LogoutService) { }
  hotelname =localStorage.getItem("hotelname")
  hotellocation=localStorage.getItem("hotellocation")
  checkin=localStorage.getItem("checkin")
  days=localStorage.getItem("duration")
  singlebed=localStorage.getItem("singlebed")
  doublebed=localStorage.getItem("doublebed")
  deluxe=localStorage.getItem("deluxe")
 // price=localStorage.getItem("price")

  
  ngOnInit(): void {   
 
}

  
price:any
duration:any
total:any
roomData(data:any){
  localStorage.setItem("type",""+data.bedroom)
  const type=localStorage.getItem("type")
  if(type=="single"){
  localStorage.setItem("price",""+this.singlebed)
  this. price=localStorage.getItem("price")
  this.duration=localStorage.getItem("duration")
  this.total=this.price*this.duration;
  localStorage.setItem("total",""+this.total)
  }
  else if(type=="double"){
    localStorage.setItem("price",""+this.doublebed)
    this. price=localStorage.getItem("price")
    this.duration=localStorage.getItem("duration")
    this.total=this.price*this.duration;
  }
 else if(type=="deluxebed"){
    localStorage.setItem("price",""+this.deluxe)
  this. price=localStorage.getItem("price")
  this.duration=localStorage.getItem("duration")
  this.total=this.price*this.duration;

      
}

 
}
logoutuser(){
  alert("Your room is successfully booked")
  this.logoutService.logout()
}

}
