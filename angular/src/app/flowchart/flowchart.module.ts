import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowchartRoutingModule } from './flowchart-routing.module';
import { FlowchartComponent } from './flowchart.component';


@NgModule({
  declarations: [FlowchartComponent],
  imports: [
    CommonModule,
    FlowchartRoutingModule
  ]
})
export class FlowchartModule { }
