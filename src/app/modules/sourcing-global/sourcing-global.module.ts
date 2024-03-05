import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

import { SourcingGlobalRoutingModule } from './sourcing-global-routing.module';
import { SourcingGlobalPageComponent } from './pages/sourcing-global-page/sourcing-global-page.component';
import { SharedModule } from "../../shared/shared.module";

export function homeHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/global-sourcing/', '.json');
}

@NgModule({
    declarations: [
        SourcingGlobalPageComponent
    ],
    imports: [
        CommonModule,
        SourcingGlobalRoutingModule,
        SharedModule,
        TranslateModule.forChild({
          loader: {
            provide: TranslateLoader,
            useFactory: homeHttpLoaderFactory,
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
export class SourcingGlobalModule { }
