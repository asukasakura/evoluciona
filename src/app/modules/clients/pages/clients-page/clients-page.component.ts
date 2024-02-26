import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from 'src/app/i18n-service/i18n-service.service';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.sass']
})
export class ClientsPageComponent implements OnInit {

  nCards = 'grid-cols-1 md:grid-cols-3'
  gridCols = 'grid-cols-1 md:grid-cols-6'
  spanCol1 = 'md:col-span-2'
  spanCol2 = 'md:col-span-3'
  startCol2 = 'md:col-start-4'
  headText: any

  clientes: Array<any> = []
  successStories: Array<any> = []
  

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
    
    this.clientes = [
      {
        name: 'Entel',
        image: './assets/images/clientes/logos_clientes_01_Entel.svg',
      },
      {
        name: 'DuocUC',
        image: './assets/images/clientes/logos_clientes_02_Duoc.svg',
      },
      {
        name: 'Lexicom',
        image: './assets/images/clientes/logos_clientes_03_Lexi.svg',
      },
      {
        name: 'Claro',
        image: './assets/images/clientes/logos_clientes_04_Claro.svg',
      },
      {
        name: 'Banco Falabella',
        image: './assets/images/clientes/logos_clientes_05_Falabella.svg',
      },
      {
        name: 'Transbank',
        image: './assets/images/clientes/logos_clientes_06_Transbank.svg',
      },
      {
        name: 'Hunter Douglas',
        image: './assets/images/clientes/logos_clientes_07_HunterD.svg',
      },
      {
        name: 'Universiversidad de Chile',
        image: './assets/images/clientes/logos_clientes_08_UDC.svg',
      },
      {
        name: 'Universidad de Santiago de Chile',
        image: './assets/images/clientes/logos_clientes_09_USC.svg',
      },
      {
        name: 'SICE',
        image: './assets/images/clientes/logos_clientes_10_Sice.svg',
      },
      {
        name: 'Q Free',
        image: './assets/images/clientes/logos_clientes_11_Qfree.svg',
      },
      {
        name: 'SH Soy honorario',
        image: './assets/images/clientes/logos_clientes_12_SH.svg',
      },
      {
        name: 'ST Soy trabajador',
        image: './assets/images/clientes/logos_clientes_13_ST.svg',
      },
      {
        name: 'Fondo Esperanza',
        image: './assets/images/clientes/logos_clientes_14_Fe.svg',
      },
      {
        name: 'Autopista Vespucio Norte',
        image: './assets/images/clientes/logos_clientes_15_Vespucio.svg',
      },
    ]

    this.successStories = [
      {
        title: 'PROJECT_MANAGEMENT.TITLE',
        cards: [
          {
            title: 'PROJECT_MANAGEMENT.CARD1.TITLE',
            text: 'PROJECT_MANAGEMENT.CARD1.TEXT',
            image: './assets/images/success_stories/ruta-68-chile.jpg',
          },
          {
            title: 'PROJECT_MANAGEMENT.CARD2.TITLE',
            text: 'PROJECT_MANAGEMENT.CARD2.TEXT',
            image: './assets/images/success_stories/vespucio-norte-chile.jpg',
          },
          {
            title: 'PROJECT_MANAGEMENT.CARD3.TITLE',
            text: 'PROJECT_MANAGEMENT.CARD3.TEXT',
            image: './assets/images/success_stories/capufe-mexico.jpg',
          },
        ]
      },
      {
        title: 'DEVELOPMENTS.TITLE',
        cards: [
          {
            title: 'DEVELOPMENTS.CARD1.TITLE',
            text: 'DEVELOPMENTS.CARD1.TEXT',
            image: './assets/images/success_stories/ruta-68-chile-2.jpg',
          },
          {
            title: 'DEVELOPMENTS.CARD2.TITLE',
            text: 'DEVELOPMENTS.CARD2.TEXT',
            image: './assets/images/success_stories/q-free-portugal.jpg',
          },
          {
            title: 'DEVELOPMENTS.CARD3.TITLE',
            text: 'DEVELOPMENTS.CARD3.TEXT',
            image: './assets/images/success_stories/valles-de-biobio.jpg',
          },
          {
            title: 'DEVELOPMENTS.CARD4.TITLE',
            text: 'DEVELOPMENTS.CARD4.TEXT',
            image: './assets/images/success_stories/tunel-san-cristobal.jpg',
          },
        ]
      },
      {
        title: 'COMMERCIAL_SUPPORT.TITLE',
        cards: [ 
          {
            title: 'COMMERCIAL_SUPPORT.CARD1.TITLE',
            text: 'COMMERCIAL_SUPPORT.CARD1.TEXT',
            image: './assets/images/success_stories/q-free-portugal-a28.jpg',
          },
          {
            title: 'COMMERCIAL_SUPPORT.CARD2.TITLE',
            text: 'COMMERCIAL_SUPPORT.CARD2.TEXT',
            image: './assets/images/success_stories/q-free-chile-nogales-puchuncavi.jpg',
          },
          {
            title: 'COMMERCIAL_SUPPORT.CARD3.TITLE',
            text: 'COMMERCIAL_SUPPORT.CARD3.TEXT',
            image: './assets/images/success_stories/q-free-portugal-a22.jpg',
          },
        ]
      }
    ]

  }
}
