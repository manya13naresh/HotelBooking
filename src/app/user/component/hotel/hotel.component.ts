import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LogoutService } from '../../../core/services/logout.service';

export class Hotel{
  constructor(
    public id:number,
    public location:string,
    public hotelname:string,
    public rating:number,
    public singlebed:number,
    public image:string,
    public doublebed:number,
    public deluxe:number
  ){}
}
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
hotel!:Hotel[];
  constructor(private httpclient:HttpClient,private router:Router) { }

  ngOnInit(){
     this.hoteldata() 
  }
  hoteldata(){
    const location =localStorage.getItem("location")
    this.httpclient.get<any>("http://localhost:9000/hotel/"+location)
    .subscribe(
      response=>{
        console.log(response);
        this.hotel=response;
      }
    )

  }

  booking(hotelvalue:any){
    localStorage.setItem('hotelname',""+hotelvalue.hotelname)
    localStorage.setItem('singlebed',""+ hotelvalue.singlebed)
    localStorage.setItem('doublebed',""+ hotelvalue.doublebed)
    localStorage.setItem('deluxe',""+ hotelvalue.deluxe)
    localStorage.setItem('hotellocation',""+hotelvalue.hotellocation)
    this.router.navigate(['booking'])
  }
  

  // roomdata(data:any){
  //   localStorage.setItem('type',""+data.type)
  // }
}
