import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncidentRoutingModule } from './incident-routing.module';
import { IncidentComponent } from './incident.component';


@NgModule({
  declarations: [IncidentComponent],
  imports: [
    CommonModule,
    IncidentRoutingModule,
    FormsModule
  ]
})
export class IncidentModule { }
