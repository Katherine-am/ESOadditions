import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';


@NgModule({
  declarations: [PatientComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule
  ]
})
export class PatientModule { }
