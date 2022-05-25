import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../../../core/services/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private logoutService:LogoutService) { }

  ngOnInit(): void {
  }
  logoutuser(){
    this.logoutService.logout()
  }
}
