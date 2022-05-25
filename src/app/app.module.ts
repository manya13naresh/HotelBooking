import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppComponent } from './app.component';
import { IndexComponent } from './user/component/index/index.component';
import { LoginComponent } from './user/component/login/login.component';
import { SigninComponent } from './user/component/signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './user/component/home/home.component';
import { NavbarComponent } from './user/component/navbar/navbar.component';
import { LocationComponent } from './user/component/location/location.component';
import { HotelComponent } from './user/component/hotel/hotel.component';
import { BookingComponent } from './user/component/booking/booking.component';
 import { JwtInterceptorInterceptor } from './core/interceptor/jwt-interceptor.interceptor';
import { LogoutComponent } from './user/component/logout/logout.component';
import { FormsModule} from '@angular/forms';
import { AdminModule } from './admin/admin.module';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent, 
    SigninComponent,
    HomeComponent,
    NavbarComponent,
    LocationComponent,
    HotelComponent,
    BookingComponent,
    LogoutComponent,

    
  ],
  imports: [
   FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: JwtInterceptorInterceptor,
    multi:true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
