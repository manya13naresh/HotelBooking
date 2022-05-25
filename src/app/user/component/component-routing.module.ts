import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path: 'login', component: LoginComponent},
  {path:'signin',component:SigninComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
   {path:'hotel',component:HotelComponent,canActivate:[AuthGuard]},
   {path:'booking',component:BookingComponent,canActivate:[AuthGuard] },
   {path:'logout',component:LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
