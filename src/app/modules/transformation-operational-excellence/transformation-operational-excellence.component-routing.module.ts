import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransformationOperationalExcellenceComponent } from './transformation-operational-excellence.component';

const routes: Routes = [
  {
    path: '',
    component: TransformationOperationalExcellenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransformationOperationalExcellenceRoutingModule { }
