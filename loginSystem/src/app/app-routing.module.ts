import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"login",component:UserInfoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
