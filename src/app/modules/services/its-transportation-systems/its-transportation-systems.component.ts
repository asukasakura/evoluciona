import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from 'src/app/i18n-service/i18n-service.service';


import { VgApiService } from '@videogular/ngx-videogular/core';
import { PlayerStateService } from '@shared/services/player-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-its-transportation-systems',
  templateUrl: './its-transportation-systems.component.html',
  styleUrls: ['./its-transportation-systems.component.sass']
})
export class ItsTransportationSystemsComponent implements OnInit {

  nCards = 'grid-cols-1 md:grid-cols-3'
  gridCols = 'grid-cols-1 md:grid-cols-6'
  spanCol1 = 'md:col-span-2'
  spanCol2 = 'md:col-span-4'
  startCol2 = 'md:col-start-3'

  videoPlay: boolean | undefined
  videoPause: boolean | undefined
  api!: VgApiService;
  playerState$!: Observable<string>;
  
  @Input() dataCards: Array<any> = []
  @Input() dataCards2: Array<any> = []
  @Input() dataLargeCards: Array<any> = []

  onPlayerReady(api: VgApiService) {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.play.subscribe(
      (event) => {
        this.playerState.updatePlayerState('play');
        this.videoPlay = true
        this.videoPause = false
      }
  );
  this.api.getDefaultMedia().subscriptions.pause.subscribe(
      (event) => {
        this.playerState.updatePlayerState('pause');
        this.videoPause = true
        this.videoPlay = false
      }
  );
  }


  constructor(
    private translate: TranslateService, 
    private i18nService: I18nServiceService,
    private playerState: PlayerStateService
    ) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.i18nService.localeEvent.subscribe(locale => this.translate.use(locale)); 
    this.playerState$ = this.playerState.state$;

    this.dataCards = [
      {
        title: 'OUR_SPECIALIZATION_IN_ITS.CARDS.CARD1.TITLE',
        image: './assets/images/icons/tmfeAutopistaIcons.svg',
        paragraph: 'OUR_SPECIALIZATION_IN_ITS.CARDS.CARD1.TEXT'
      },
      {
        title: 'OUR_SPECIALIZATION_IN_ITS.CARDS.CARD2.TITLE',
        image: './assets/images/icons/its/sistemas-centrales-peaje.svg',
        paragraph: 'OUR_SPECIALIZATION_IN_ITS.CARDS.CARD2.TEXT'
      },
      {
        title: 'OUR_SPECIALIZATION_IN_ITS.CARDS.CARD3.TITLE',
        image: './assets/images/icons/its/control-operativo.svg',
        paragraph: 'OUR_SPECIALIZATION_IN_ITS.CARDS.CARD3.TEXT'
      },
      {
        title: 'OUR_SPECIALIZATION_IN_ITS.CARDS.CARD4.TITLE',
        image: './assets/images/icons/tmfeAdviceIcon.svg',
        paragraph: 'OUR_SPECIALIZATION_IN_ITS.CARDS.CARD4.TEXT'
      }
    ],
    this.dataCards2 = [
      {
        title: 'OUR_SPECIALIZATION_IN_ITS_2.CARDS.CARD1.TEXT',
        image: './assets/images/icons/its/desarrollo-software.svg',
      },
      {
        title: 'OUR_SPECIALIZATION_IN_ITS_2.CARDS.CARD2.TEXT',
        image: './assets/images/icons/its/asesoria-concesionarias.svg',
      },
      {
        title: 'OUR_SPECIALIZATION_IN_ITS_2.CARDS.CARD3.TEXT',
        image: './assets/images/icons/its/asesoria-gobierno.svg',
      }
    ],
    this.dataLargeCards = [
      {
        title: 'ITS_SOFTWARE_DEVELOPED.CARDS.CARD1.TITLE',
        text: 'ITS_SOFTWARE_DEVELOPED.CARDS.CARD1.TEXT',
        image: './assets/images/its/tmfe.jpg',
      },
      {
        title: 'ITS_SOFTWARE_DEVELOPED.CARDS.CARD2.TITLE',
        text: 'ITS_SOFTWARE_DEVELOPED.CARDS.CARD2.TEXT',
        image: './assets/images/its/intrada-synergy.jpg',
      },
      {
        title: 'ITS_SOFTWARE_DEVELOPED.CARDS.CARD3.TITLE',
        text: 'ITS_SOFTWARE_DEVELOPED.CARDS.CARD3.TEXT',
        image: './assets/images/its/comercial-back-office.jpg',
      },
    ]
  }

}
