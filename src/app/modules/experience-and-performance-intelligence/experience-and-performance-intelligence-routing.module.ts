import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceAndPerformanceIntelligenceComponent } from './experience-and-performance-intelligence.component';

const routes: Routes = [
  {
    path: '',
    component: ExperienceAndPerformanceIntelligenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceAndPerformanceIntelligenceRoutingModule { }
