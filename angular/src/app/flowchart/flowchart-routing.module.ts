import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlowchartComponent } from './flowchart.component';

const routes: Routes = [{ path: '', component: FlowchartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowchartRoutingModule { }
