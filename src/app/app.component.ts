import { Component } from '@angular/core';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food';
  constructor(private router: Router) {}
    navigateToHome() {
    this.router.navigate(['/home'], { skipLocationChange: true });
  }

}
