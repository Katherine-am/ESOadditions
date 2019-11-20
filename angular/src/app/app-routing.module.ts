import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'incident-home', loadChildren: () => import('./incident/incident.module').then(m => m.IncidentModule) }, 
  { path: 'patient-home', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule) }, 
  { path: 'vitals-home', loadChildren: () => import('./vitals/vitals.module').then(m => m.VitalsModule) }, 
  { path: 'flowchart-home', loadChildren: () => import('./flowchart/flowchart.module').then(m => m.FlowchartModule) }, 
  { path: 'assessments-home', loadChildren: () => import('./assessments/assessments.module').then(m => m.AssessmentsModule) }, 
  { path: 'narrative-home', loadChildren: () => import('./narrative/narrative.module').then(m => m.NarrativeModule) }, 
  { path: 'forms-home', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule) }, 
  { path: 'billing-home', loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule) }, 
  { path: 'signatures-home', loadChildren: () => import('./signatures/signatures.module').then(m => m.SignaturesModule)},
  { path: '', pathMatch: 'full', redirectTo: '/patient-home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
