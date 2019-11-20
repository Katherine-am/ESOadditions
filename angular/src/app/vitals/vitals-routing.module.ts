import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VitalsComponent } from './vitals.component';

const routes: Routes = [{ path: '', component: VitalsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VitalsRoutingModule { }
