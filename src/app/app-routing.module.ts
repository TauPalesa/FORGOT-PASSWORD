import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ResetPasswordComponent } from './reset-password'
import { CredentialsComponent } from './credentials'
import { NextComponent } from './next'



const routes: Routes = [

  {path :'reset-password',component:ResetPasswordComponent},
   {path:'credentials',component:CredentialsComponent},
   {path:'next',component:NextComponent}


   //{path : '',redirectTo: 'CredentialsComponent' }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
//export class AppRoutingModule { }
export const AppRoutingModule = RouterModule.forRoot(routes);
