import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceAndPerformanceIntelligenceRoutingModule } from './experience-and-performance-intelligence-routing.module';
import { ExperienceAndPerformanceIntelligenceComponent } from './experience-and-performance-intelligence.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from '@shared/shared.module';
import { MatIconModule } from "@angular/material/icon";

export function experienceAndPerformanceIntelligenceHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/experience-and-performance-intelligence/', '.json');
}



@NgModule({
  declarations: [
    ExperienceAndPerformanceIntelligenceComponent
  ],
  imports: [
    CommonModule,
    ExperienceAndPerformanceIntelligenceRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: experienceAndPerformanceIntelligenceHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SharedModule,
    MatIconModule
  ]
})
export class ExperienceAndPerformanceIntelligenceModule { }
