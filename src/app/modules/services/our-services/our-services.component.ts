import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from 'src/app/i18n-service/i18n-service.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.sass']
})
export class OurServicesComponent implements OnInit {

  @Input() dataCards: Array<any> = [
    {
      _id: 1,
      title: 'ITS_TRANSPORTATION_SYSTEMS',
      paragraph: 'ITS_TRANSPORTATION_SYSTEMS_TEXT',
      image: './assets/images/icons/servicios/ITS_TRANSPORTATION_SYSTEMS.svg'
    },
    {
      _id: 2,
      title: 'GLOBAL_SOURCING',
      paragraph: 'GLOBAL_SOURCING_TEXT',
      image: './assets/images/icons/servicios/GLOBAL_SOURCING.svg'
    },
    {
      _id: 3,
      title: 'MOBILE_APPS',
      paragraph: 'MOBILE_APPS_TEXT',
      image: './assets/images/icons/servicios/MOBILE_APPS.svg'
    },
    {
      _id: 4,
      title: 'AUDIOVISUAL_DEVELOPMENT',
      paragraph: 'AUDIOVISUAL_DEVELOPMENT_TEXT',
      image: './assets/images/icons/servicios/AUDIOVISUAL_DEVELOPMENT.svg'
    },
    {
      _id: 5,
      title: 'BUSINESS_ENGINEERING',
      paragraph: 'BUSINESS_ENGINEERING_TEXT',
      image: './assets/images/icons/servicios/BUSINESS_ENGINEERING.svg'
    },
  ]

  nCards = 'grid-cols-1 md:grid-cols-3'
  gridCols = 'grid-cols-1 md:grid-cols-6'
  spanCol1 = 'md:col-span-2'
  spanCol2 = 'md:col-span-3'
  startCol2 = 'md:col-start-4'

  constructor(
    private translate: TranslateService, 
    private i18nService: I18nServiceService,
  ) {
    translate.setDefaultLang('en');
   }

  ngOnInit(): void {
  }

}
