import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AminComponent } from './amin/amin.component';
import { CComponent } from './c/c.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UminComponent } from './umin/umin.component';

const routes: Routes = [
  {path:'add',component:AddComponent},
  {path:'task-details', component:CComponent},
  {path:'login', component:LoginComponent},
  {path:'c', component:CComponent},
  {path:'dash', component:DashboardComponent},
  {path:'umin', component:UminComponent},
  {path:'amin', component:AminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AddComponent]
