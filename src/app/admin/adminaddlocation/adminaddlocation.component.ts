import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminaddlocation',
  templateUrl: './adminaddlocation.component.html',
  styleUrls: ['./adminaddlocation.component.css']
})
export class AdminaddlocationComponent implements OnInit {
  constructor(private http:HttpClient,private router:Router) { }

  addhotelData(data:any){

    this.http.post("http://localhost:9000/admin/adminaddlocation",{location:data.location,hotelname:data.hotelname,rating:data.rating,image:data.image
  ,singlebed:data.singlebed,doublebed:data.doublebed,deluxe:data.deluxe})
    .subscribe(
      (response:any)=>{
      console.log(data)
      alert("Successfully Added")
      this.router.navigate(['deletelocation'])
    },(error)=>{
      console.log(error)    
      this.router.navigate(['deletelocation']) 
    })
  
     
  
    
  }
  
    
  
    ngOnInit(): void {
    }
  
}
