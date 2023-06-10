import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BooklistComponent } from './booklist/booklist.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashbord',component:DashbordComponent,canActivate:[AuthGuard]},
  {path:'booklist',component:BooklistComponent,canActivate:[AuthGuard]},
  
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
