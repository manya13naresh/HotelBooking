import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
getJwtToken(){
  return localStorage.getItem("jwtToken")
}
saveJwtToken(jwtToken:any){
  localStorage.setItem("jwtToken",jwtToken)
}
getRefreshToken(){
  return localStorage.getItem("refreshToken")
}
saveRefreshToken(refreshToken:any){
  localStorage.setItem("refreshToken",refreshToken)
}
  constructor() { }

}
