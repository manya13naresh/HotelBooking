import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  selector: 'app-deletelocation',
  templateUrl: './deletelocation.component.html',
  styleUrls: ['./deletelocation.component.css']
})
export class DeletelocationComponent implements OnInit {
  hotel!:Hotel[];
  constructor(private httpclient:HttpClient,) { }

  ngOnInit(): void {
    this.allhotel();
  }
 allhotel(){
    
    this.httpclient.get<any>("http://localhost:9000/admin/gethotels")
    .subscribe(
      response=>{
        console.log(response);
        this.hotel=response;
      }
    )

  }
  deleting(value:any)
  {
    localStorage.setItem('hotelname',""+value.hotelname)
    const hotelname=localStorage.getItem("hotelname")
    this.httpclient.get<any>("http://localhost:9000/admin/deletelocation/"+hotelname)
    .subscribe(
          (res:any) => {
          alert('Successfully deleted')
          window.location.reload();
       })
  }
}
