import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/core/services/logout.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor(private logoutService:LogoutService) { }

  ngOnInit(): void {
  }
  logoutuser(){
    this.logoutService.logout()
  }

}
