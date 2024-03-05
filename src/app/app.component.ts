import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from './i18n-service/i18n-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(
    translate: TranslateService,
    private i18nService: I18nServiceService
  ) {
    
    let lang = localStorage.getItem('currentLang') || 'en';
    translate.setDefaultLang(lang);
    translate.use(lang);
    this.changeLocale(lang);
  }

  changeLocale(locale: string) {
    this.i18nService.changeLocale(locale);   
  }
  
}
