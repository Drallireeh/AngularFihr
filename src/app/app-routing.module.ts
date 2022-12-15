import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FHIRhubComponent } from './Components/Views/FHIRhub/fhir-hub/fhir-hub.component';

const routes: Routes = [
  { path: 'fhirhub', component: FHIRhubComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
