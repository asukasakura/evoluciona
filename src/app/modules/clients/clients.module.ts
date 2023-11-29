import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { SharedModule } from "@shared/shared.module";

export function contactHttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/clients/', '.json');
}

@NgModule({
    declarations: [
        ClientsPageComponent
    ],
    imports: [
        CommonModule,
        ClientsRoutingModule,
        SharedModule,
        TranslateModule.forChild({
            loader: {
              provide: TranslateLoader,
              useFactory: contactHttpLoaderFactory,
              deps: [HttpClient]
            },
            isolate: true,
          }),
    ]
})
export class ClientsModule { }
