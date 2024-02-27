import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpRoutingModule } from './mp-routing.module';
import { MpComponent } from './mp.component';


@NgModule({
  declarations: [
    MpComponent
  ],
  imports: [
    CommonModule,
    MpRoutingModule
  ]
})
export class MpModule { }
