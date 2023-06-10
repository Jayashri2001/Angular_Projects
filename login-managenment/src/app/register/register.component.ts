import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router) 
    {
      
    }

  registerForm = this.builder.group({
    id: this.builder.control('', Validators.required),
    firstName: this.builder.control('', Validators.required),
    lastName: this.builder.control('', Validators.required),
    gender: this.builder.control('male', Validators.required),
    password: this.builder.control('', Validators.required),
  });

  proceedregistration() {
    if (this.registerForm.valid) {
      this.service.Proceedregister(this.registerForm.value).subscribe(res => {
        this.toastr.success("Register Successfully");
        this.router.navigate(['']);
      });

    } else {
      this.toastr.warning("please enter valid data")
    }
  }

}
