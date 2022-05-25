import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../../../core/services/logout.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 locationData(value:any){
  localStorage.setItem("location",""+value.place)
  localStorage.setItem("checkin",""+value.checkin)
  localStorage.setItem("duration",""+value.duration)
  this.router.navigate(['hotel'])
 

  
 
 }
 

}
