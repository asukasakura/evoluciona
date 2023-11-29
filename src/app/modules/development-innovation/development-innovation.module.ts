import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { DevelopmentInnovationRoutingModule } from './development-innovation-routing.module';
import { DevelopmentInnovationPageComponent } from './pages/development-innovation-page/development-innovation-page.component';
import { SharedModule } from '@shared/shared.module';

export function homeHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/development-innovation/', '.json');
}

@NgModule({
  declarations: [
    DevelopmentInnovationPageComponent
  ],
  imports: [
    CommonModule,
    DevelopmentInnovationRoutingModule,
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: homeHttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true,
    }),
  ]
})
export class DevelopmentInnovationModule { }
