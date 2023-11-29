import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { TrafficMonitoringFrontEndComponent } from './traffic-monitoring-front-end/traffic-monitoring-front-end.component';

const routes: Routes = [
  {
    path: '',
    component: ProductPageComponent,
    children: [
      {
        path: 'our-products',
        component: OurProductsComponent
      },
      {
        path: 'traffic-monitoring-front-end',
        component: TrafficMonitoringFrontEndComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
