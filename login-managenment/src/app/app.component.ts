import { Component ,DoCheck} from '@angular/core';
import { Router } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements DoCheck{
  title = 'login-managenment';
  ismenurquired=false;
  dialog: any;
  constructor(private router:Router ){
  }
  
  ngDoCheck(): void {
    let currenturl=this.router.url;
    if(currenturl=='/login'||currenturl=='/register'){
      this.ismenurquired=false

    }else{
      this.ismenurquired=true
    }
    
  }
}
