import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NarrativeRoutingModule } from './narrative-routing.module';
import { NarrativeComponent } from './narrative.component';


@NgModule({
  declarations: [NarrativeComponent],
  imports: [
    CommonModule,
    NarrativeRoutingModule
  ]
})
export class NarrativeModule { }
