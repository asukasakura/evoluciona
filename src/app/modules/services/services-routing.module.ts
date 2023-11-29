import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicePageComponent } from './service-page/service-page.component';
import { ItsTransportationSystemsComponent } from './its-transportation-systems/its-transportation-systems.component';
import { OurServicesComponent } from './our-services/our-services.component';

const routes: Routes = [
  {
    path: '',
    component: ItsTransportationSystemsComponent,
    children: [
      {
        path: 'our-services',
        component: OurServicesComponent
      },
      // {
      //   path: 'its-transportation-systems',
      //   component: ItsTransportationSystemsComponent
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
