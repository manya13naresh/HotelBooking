import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminaddlocationComponent } from './admin/adminaddlocation/adminaddlocation.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { DeletelocationComponent } from './admin/deletelocation/deletelocation.component';

import { AuthGuard } from './core/guard/auth.guard';




 const routes: Routes = [
  {
    path:"",loadChildren:()=>import ( './user/component/component.module' ).then(m=>m.ComponentModule)  ,
  },

  {path:"adminlogin",component:AdminloginComponent},
  {path:"adminaddlocation",component:AdminaddlocationComponent,canActivate:[AuthGuard]},
  {path:"deletelocation",component:DeletelocationComponent,canActivate:[AuthGuard]},
 
 
]; 

@NgModule({
   imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }

    