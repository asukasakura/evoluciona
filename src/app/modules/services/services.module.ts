import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicePageComponent } from './service-page/service-page.component';
import { ItsTransportationSystemsComponent } from './its-transportation-systems/its-transportation-systems.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { SharedModule } from "../../shared/shared.module";

export function productsHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/services/', '.json');
}

@NgModule({
    declarations: [
        ServicePageComponent,
        ItsTransportationSystemsComponent,
        OurServicesComponent
    ],
    imports: [
        CommonModule,
        ServicesRoutingModule,
        SharedModule,
        TranslateModule.forChild({
          loader: {
            provide: TranslateLoader,
            useFactory: productsHttpLoaderFactory,
            deps: [HttpClient]
          },
          isolate: true,
        }),
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule
    ]
})
export class ServicesModule { }
