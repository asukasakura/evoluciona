import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from 'src/app/i18n-service/i18n-service.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  constructor(
    private translate: TranslateService, 
    private i18nService: I18nServiceService
    ) {
      let lang = localStorage.getItem('currentLang') || 'en';
      translate.setDefaultLang(lang);
      translate.use(lang);
  }

  ngOnInit(): void {

    let lang = localStorage.getItem('currentLang') || 'en';
    this.translate.setDefaultLang(lang);

    this.i18nService.localeEvent.subscribe(locale => {
      this.translate.use(locale);
    });

  }

}
