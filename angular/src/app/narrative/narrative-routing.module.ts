import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NarrativeComponent } from './narrative.component';

const routes: Routes = [{ path: '', component: NarrativeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NarrativeRoutingModule { }
