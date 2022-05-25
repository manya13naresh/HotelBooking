import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminaddlocationComponent } from './adminaddlocation/adminaddlocation.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { DeletelocationComponent } from './deletelocation/deletelocation.component';
import { FormsModule, NgForm } from '@angular/forms';



@NgModule({
  declarations: [
    AdminaddlocationComponent,
    AdminloginComponent,
    NavbarAdminComponent,
    DeletelocationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
   exports:[
    AdminaddlocationComponent,
    AdminaddlocationComponent,  
    DeletelocationComponent
  ] 
})
export class AdminModule { }
