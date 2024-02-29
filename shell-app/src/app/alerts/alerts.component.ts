import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent {

  constructor(private route: Router){
    console.log('routing data', this.route?.getCurrentNavigation()?.extras?.state);
  }

  ngOnInit() {
  }

}
