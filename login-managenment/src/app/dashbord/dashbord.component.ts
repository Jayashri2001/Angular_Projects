import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  title = 'login-managenment';
  ismenurquired = false;
  dialog: any;
  constructor(private router: Router) {

  }

  ngDoCheck(): void {
    let currenturl = this.router.url;
    if (currenturl == '/login' || currenturl == '/register') {
      this.ismenurquired = false;

    } else {
      this.ismenurquired = true;
    }

  }

}
