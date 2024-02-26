import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AutorizationInterceptorService } from './core/interceptors/autorization.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ScrollAnchorDirective } from './directives/scroll-anchor.directive';
import { ScrollSectionDirective } from './directives/scroll-section.directive';
import { ScrollManagerDirective } from './directives/scroll-manager.directive';
import { PlayerStateService } from '@shared/services/player-state.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { MaterialModule } from '@shared/material.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ScrollAnchorDirective,
    ScrollSectionDirective,
    ScrollManagerDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true,
      defaultLanguage: 'en'
    }),    
    MaterialModule
  ],
  providers: [
    PlayerStateService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutorizationInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
