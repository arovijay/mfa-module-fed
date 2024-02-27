import { Component } from '@angular/core';

@Component({
  selector: 'app-mp',
  templateUrl: './mp.component.html',
  styleUrls: ['./mp.component.css']
})
export class MpComponent {
  public data = 0;

  increament(){
    this.data++;
  }
}
