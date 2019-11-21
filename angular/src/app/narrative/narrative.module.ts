import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NarrativeRoutingModule } from './narrative-routing.module';
import { NarrativeComponent } from './narrative.component';


@NgModule({
  declarations: [NarrativeComponent],
  imports: [
    CommonModule,
    NarrativeRoutingModule,
    FormsModule
  ]
})
export class NarrativeModule { }
