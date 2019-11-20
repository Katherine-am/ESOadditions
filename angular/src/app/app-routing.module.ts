import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppModule } from './app.module';


const routes: Routes = [
  { path: 'home-home', loadChildren: () =>import('./home/home.module').then(m => m.HomeModule) },
  { path: 'incident-home/:id', loadChildren: () => import('./incident/incident.module').then(m => m.IncidentModule) },
  { path: 'patient-home/:id', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule) },
  { path: 'vitals-home/:id', loadChildren: () => import('./vitals/vitals.module').then(m => m.VitalsModule) },
  { path: 'flowchart-home/:id', loadChildren: () => import('./flowchart/flowchart.module').then(m => m.FlowchartModule) },
  { path: 'assessments-home/:id', loadChildren: () => import('./assessments/assessments.module').then(m => m.AssessmentsModule) },
  { path: 'narrative-home/:id', loadChildren: () => import('./narrative/narrative.module').then(m => m.NarrativeModule) },
  { path: 'forms-home', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule) },
  { path: 'billing-home', loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule) },
  { path: 'signatures-home', loadChildren: () => import('./signatures/signatures.module').then(m => m.SignaturesModule)},
  { path: '', pathMatch: 'full', redirectTo: '/home-home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
