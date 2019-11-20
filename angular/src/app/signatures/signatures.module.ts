import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignaturesRoutingModule } from './signatures-routing.module';
import { SignaturesComponent } from './signatures.component';


@NgModule({
  declarations: [SignaturesComponent],
  imports: [
    CommonModule,
    SignaturesRoutingModule
  ]
})
export class SignaturesModule { }
