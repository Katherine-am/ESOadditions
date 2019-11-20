import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VitalsRoutingModule } from './vitals-routing.module';
import { VitalsComponent } from './vitals.component';


@NgModule({
  declarations: [VitalsComponent],
  imports: [
    CommonModule,
    VitalsRoutingModule
  ]
})
export class VitalsModule { }
