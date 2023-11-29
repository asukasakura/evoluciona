import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from 'src/app/i18n-service/i18n-service.service';


@Component({
  selector: 'app-sourcing-global-page',
  templateUrl: './sourcing-global-page.component.html',
  styleUrls: ['./sourcing-global-page.component.sass']
})
export class SourcingGlobalPageComponent implements OnInit {

  nCards = 'grid-cols-1 md:grid-cols-3'
  gridCols = 'grid-cols-1 md:grid-cols-6'
  spanCol1 = 'md:col-span-2'
  spanCol2 = 'md:col-span-4'
  startCol2 = 'md:col-start-3'

  @Input() globalSourcingCards: Array<any> = []
  @Input() additionallyCards: Array<any> = []

  constructor(
    private translate: TranslateService, 
    private i18nService: I18nServiceService,
  ) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.i18nService.localeEvent.subscribe(locale => this.translate.use(locale)); 
    
    this.globalSourcingCards = [
      {
        title: 'WHY_DO_GLOBAL_SOURCING_WITH_US.CARDS.CARD1.TITLE',
        image: './assets/images/icons/global-sourcing/informe-psicolaboral.svg',
        paragraph: 'WHY_DO_GLOBAL_SOURCING_WITH_US.CARDS.CARD1.TEXT'
      },
      {
        title: 'WHY_DO_GLOBAL_SOURCING_WITH_US.CARDS.CARD2.TITLE',
        image: './assets/images/icons/global-sourcing/competencias-tecnicas.svg',
        paragraph: 'WHY_DO_GLOBAL_SOURCING_WITH_US.CARDS.CARD2.TEXT'
      },
      {
        title: 'WHY_DO_GLOBAL_SOURCING_WITH_US.CARDS.CARD3.TITLE',
        image: './assets/images/icons/global-sourcing/apoyo-tecnico.svg',
        paragraph: 'WHY_DO_GLOBAL_SOURCING_WITH_US.CARDS.CARD3.TEXT'
      },
      {
        title: 'WHY_DO_GLOBAL_SOURCING_WITH_US.CARDS.CARD4.TITLE',
        image: './assets/images/icons/global-sourcing/apegados-legislacion.svg',
        paragraph: 'WHY_DO_GLOBAL_SOURCING_WITH_US.CARDS.CARD4.TEXT'
      },
      {
        title: 'WHY_DO_GLOBAL_SOURCING_WITH_US.CARDS.CARD5.TITLE',
        image: './assets/images/icons/global-sourcing/absorcion-laboral.svg',
        paragraph: 'WHY_DO_GLOBAL_SOURCING_WITH_US.CARDS.CARD5.TEXT'
      },
      {
        title: 'WHY_DO_GLOBAL_SOURCING_WITH_US.CARDS.CARD6.TITLE',
        image: './assets/images/icons/global-sourcing/absorcion-laboral.svg',
        paragraph: 'WHY_DO_GLOBAL_SOURCING_WITH_US.CARDS.CARD6.TEXT'
      },
      {
        title: 'WHY_DO_GLOBAL_SOURCING_WITH_US.CARDS.CARD7.TITLE',
        image: './assets/images/icons/global-sourcing/absorcion-laboral.svg',
        paragraph: 'WHY_DO_GLOBAL_SOURCING_WITH_US.CARDS.CARD7.TEXT'
      },
    ]

    this.additionallyCards = [
      {
        title: 'ADDITIONALLY.CARDS.CARD1.TITLE',
        image: './assets/images/global-sourcing/seleccion.jpg',
        paragraph: 'ADDITIONALLY.CARDS.CARD1.TEXT'
      },
      {
        title: 'ADDITIONALLY.CARDS.CARD2.TITLE',
        image: './assets/images/global-sourcing/ahorro.jpg',
        paragraph: 'ADDITIONALLY.CARDS.CARD2.TEXT'
      },
      {
        title: 'ADDITIONALLY.CARDS.CARD3.TITLE',
        image: './assets/images/global-sourcing/profesionalismo.jpg',
        paragraph: 'ADDITIONALLY.CARDS.CARD3.TEXT'
      },
    ]
  }

}
