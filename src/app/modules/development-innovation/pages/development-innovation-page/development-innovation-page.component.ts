import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from 'src/app/i18n-service/i18n-service.service';

@Component({
  selector: 'app-development-innovation-page',
  templateUrl: './development-innovation-page.component.html',
  styleUrls: ['./development-innovation-page.component.sass']
})
export class DevelopmentInnovationPageComponent implements OnInit {

  nCards = 'grid-cols-1 md:grid-cols-3'
  gridCols = 'grid-cols-1 md:grid-cols-6'
  spanCol1 = 'md:col-span-2'
  spanCol2 = 'md:col-span-4'
  startCol2 = 'md:col-start-3'

  @Input() businessEngineeringCards : Array<any> = []
  @Input() audiovisualDevelopmentCards : Array<any> = []
  @Input() moreCards : Array<any> = []

  constructor(
    private translate: TranslateService, 
    private i18nService: I18nServiceService,
  ) {
    translate.setDefaultLang('en');
   }

  ngOnInit(): void {
    this.i18nService.localeEvent.subscribe(locale => this.translate.use(locale)); 
    
    this.businessEngineeringCards = [
      {
        title: 'BUSINESS_ENGINEERING.CARDS.CARD1.TITLE',
        image: './assets/images/icons/development-innovation/strategic-plans.svg',
        paragraph: 'BUSINESS_ENGINEERING.CARDS.CARD1.TEXT'
      },
      {
        title: 'BUSINESS_ENGINEERING.CARDS.CARD2.TITLE',
        image: './assets/images/icons/development-innovation/modelo-negocios.svg',
        paragraph: 'BUSINESS_ENGINEERING.CARDS.CARD2.TEXT'
      },
      {
        title: 'BUSINESS_ENGINEERING.CARDS.CARD3.TITLE',
        image: './assets/images/icons/development-innovation/process-architecture.svg',
        paragraph: 'BUSINESS_ENGINEERING.CARDS.CARD3.TEXT'
      },
      {
        title: 'BUSINESS_ENGINEERING.CARDS.CARD4.TITLE',
        image: './assets/images/icons/development-innovation/diseno-procesos.svg',
        paragraph: 'BUSINESS_ENGINEERING.CARDS.CARD4.TEXT'
      },
      {
        title: 'BUSINESS_ENGINEERING.CARDS.CARD5.TITLE',
        image: './assets/images/icons/development-innovation/construccion-aplicaciones.svg',
        paragraph: 'BUSINESS_ENGINEERING.CARDS.CARD5.TEXT'
      },
      {
        title: 'BUSINESS_ENGINEERING.CARDS.CARD6.TITLE',
        image: './assets/images/icons/development-innovation/capacitacion-difusion.svg',
        paragraph: 'BUSINESS_ENGINEERING.CARDS.CARD6.TEXT'
      },
    ]
    this.audiovisualDevelopmentCards = [
      {
        title: 'AUDIOVISUAL_DEVELOPMENT.CARDS.CARD1.TITLE',
        image: './assets/images/icons/development-innovation/video-promocion.svg',
        paragraph: 'AUDIOVISUAL_DEVELOPMENT.CARDS.CARD1.TEXT'
      },
      {
        title: 'AUDIOVISUAL_DEVELOPMENT.CARDS.CARD2.TITLE',
        image: './assets/images/icons/development-innovation/video-difusion.svg',
        paragraph: 'AUDIOVISUAL_DEVELOPMENT.CARDS.CARD2.TEXT'
      },
      {
        title: 'AUDIOVISUAL_DEVELOPMENT.CARDS.CARD3.TITLE',
        image: './assets/images/icons/development-innovation/motion-graphics.svg',
        paragraph: 'AUDIOVISUAL_DEVELOPMENT.CARDS.CARD3.TEXT'
      },
      {
        title: 'AUDIOVISUAL_DEVELOPMENT.CARDS.CARD4.TITLE',
        image: './assets/images/icons/development-innovation/video-capacitacion.svg',
        paragraph: 'AUDIOVISUAL_DEVELOPMENT.CARDS.CARD4.TEXT'
      },
    ]
    this.moreCards = [
      {
        title: 'MORE.CARDS.CARD1.TITLE',
        image: './assets/images/development-innovation/post-produccion.jpg',
        paragraph: 'MORE.CARDS.CARD1.TEXT'
      },
      {
        title: 'MORE.CARDS.CARD2.TITLE',
        image: './assets/images/development-innovation/produccion-post-produccion.jpg',
        paragraph: 'MORE.CARDS.CARD2.TEXT'
      },
      {
        title: 'MORE.CARDS.CARD3.TITLE',
        image: './assets/images/development-innovation/locuciones-profesionales.jpg',
        paragraph: 'MORE.CARDS.CARD3.TEXT'
      },
    ]
  }

}
