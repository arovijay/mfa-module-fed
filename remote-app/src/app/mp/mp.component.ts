import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mp',
  templateUrl: './mp.component.html',
  styleUrls: ['./mp.component.css']
})
export class MpComponent {
  public data = 0;

  constructor(private route: Router){
    console.log('routing data', this.route?.getCurrentNavigation()?.extras?.state);
  }  

  increament(){
    this.data++;
  }
}
