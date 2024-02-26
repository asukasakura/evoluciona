import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from 'src/app/i18n-service/i18n-service.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() cards: any = ''
  @Input() titlePosition: string = 'bottom'
  @Input() imageSize: string = ''

  constructor(
    private translate: TranslateService, 
    private i18nService: I18nServiceService
    ) {
      let lang = localStorage.getItem('currentLang') || 'en';
      translate.setDefaultLang(lang);
      translate.use(lang);
      
   }


  ngOnInit(): void {
    this.i18nService.localeEvent.subscribe(locale => this.translate.use(locale)); 
  }

}
