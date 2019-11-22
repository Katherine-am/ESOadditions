import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlowchartRoutingModule } from './flowchart-routing.module';
import { FlowchartComponent } from './flowchart.component';

@NgModule({
  declarations: [FlowchartComponent],
  imports: [
    CommonModule,
    FlowchartRoutingModule,
    FormsModule
  ]
})
export class FlowchartModule { }

