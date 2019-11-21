import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignaturesRoutingModule } from './signatures-routing.module';
import { SignaturesComponent } from './signatures.component';


@NgModule({
  declarations: [SignaturesComponent],
  imports: [
    CommonModule,
    SignaturesRoutingModule,
    FormsModule
  ]
})
export class SignaturesModule { }
