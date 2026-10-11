import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Interface } from 'readline';
import { I18nServiceService } from 'src/app/i18n-service/i18n-service.service';

@Component({
  selector: 'app-transformation-operational-excellence',
  templateUrl: './transformation-operational-excellence.component.html',
  styleUrls: ['./transformation-operational-excellence.component.sass']
})
export class TransformationOperationalExcellenceComponent implements OnInit {

   constructor(
    public translate: TranslateService, 
    private i18nService: I18nServiceService,
  ) {
    let lang = localStorage.getItem('currentLang') || 'en';
    translate.setDefaultLang(lang);
    translate.use(lang);
  }

  ngOnInit(): void {
    this.i18nService.localeEvent.subscribe(locale => this.translate.use(locale)); 
  }

}
