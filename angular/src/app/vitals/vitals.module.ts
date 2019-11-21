import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VitalsRoutingModule } from './vitals-routing.module';
import { VitalsComponent } from './vitals.component';
import { FormsModule } from '@angular/forms';
// import { FormsModule } from './forms/forms.module';
@NgModule({
  declarations: [VitalsComponent],
  imports: [
    CommonModule,
    VitalsRoutingModule,
    FormsModule
  ]
})
export class VitalsModule { }
