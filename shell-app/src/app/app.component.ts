import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shell-app';
  constructor(private router: Router) {}

  public navToAlerts() {
    this.router.navigate(['/alerts'], {state: { origin: 'MP' }})
  }
  
  public navToMp() {
    this.router.navigate(['/mpApp'], {state: { origin: 'redirected from BAT application' }})
  }

}
