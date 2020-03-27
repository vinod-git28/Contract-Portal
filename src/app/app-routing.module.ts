import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component'; 
import { LoginComponent } from './login/login.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path:"createuser", component:CreateuserComponent }, 
	{ path:"login", component:LoginComponent }, 
	{ path:"dashboard", component:DashboardComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent = [CreateuserComponent];
