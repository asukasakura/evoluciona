import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransformationOperationalExcellenceRoutingModule } from './transformation-operational-excellence.component-routing.module';
import { TransformationOperationalExcellenceComponent } from './transformation-operational-excellence.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from '@shared/shared.module';
import { MatIconModule } from "@angular/material/icon";

export function transformationOperationalHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/transformation-operational-excellence/', '.json');
}

@NgModule({
  declarations: [
    TransformationOperationalExcellenceComponent
  ],
  imports: [
    CommonModule,
    TransformationOperationalExcellenceRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: transformationOperationalHttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    SharedModule,
    MatIconModule,
  ]
})
export class TransformationOperationalExcellenceModule { }
