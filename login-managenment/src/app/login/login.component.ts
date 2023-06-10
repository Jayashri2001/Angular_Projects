import { Component,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import{ToastrService}  from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private builder: FormBuilder,
     private toastr: ToastrService,
     private _service: AuthService,
    private router: Router) {
      localStorage.clear()
    }
  
        

  loginForm = this.builder.group({
    username: this.builder.control('', Validators.required),    
    password: this.builder.control('', Validators.required),
    
  })

  userdata: any;

  login() {
    if (this.loginForm.valid) {
      console.log("---msg1---")
      this._service.getLogin(this.loginForm.value.username).subscribe( res => {
        this.userdata = res;
        localStorage.setItem('token',this.userdata.jwtToken);
        this.toastr.success("Login Successfully");
        this.router.navigate(['/dashbord']);
      })
    }else {
      this.toastr.error('Please enter username & password')
    }
  };


}
