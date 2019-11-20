import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssessmentsRoutingModule } from './assessments-routing.module';
import { AssessmentsComponent } from './assessments.component';


@NgModule({
  declarations: [AssessmentsComponent],
  imports: [
    CommonModule,
    AssessmentsRoutingModule
  ]
})
export class AssessmentsModule { }
