import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:AuthService,private router:Router,private toastr:ToastrService){}
  canActivate(){
    {
       if(this.service.IsloggedIn()){
         return true;
       }
          alert("you have not logged in ");
           this.router.navigate(['/']);
           return false ;
       
      
      }
  }
  }
  

