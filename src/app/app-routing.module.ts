import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from './index/index.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LoginComponent } from './login/login.component';
import{SigninComponent}from './signin/signin.component'

 const routes: Routes = [
  
   {path: 'login', component: LoginComponent},
   {path:'signin',component:SigninComponent}
 
]; 

@NgModule({
   imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }

    