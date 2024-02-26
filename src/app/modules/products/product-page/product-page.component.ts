import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from 'src/app/i18n-service/i18n-service.service';

import { VgApiService } from '@videogular/ngx-videogular/core';
import { PlayerStateService } from '@shared/services/player-state.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.sass']
})
export class ProductPageComponent implements OnInit {
  @Input() dataCards: Array<any> = [
    {
      _id: 1,
      title: null,
      paragraph: 'REDUCED_SIZE_THAT_FACILITATES_ITS_IMPLEMENTATION_IN_ANY_INFRASTRUCTURE',
      image: './assets/images/icons/tmfSizeSmall.svg'
    },
    {
      _id: 2,
      title: null,
      paragraph: 'UNIQUE_INTERFACE_FOCUSED_ON_COMMON_FUNCTIONS',
      image: './assets/images/icons/tmfeInterface.svg'
    },
    {
      _id: 3,
      title: null,
      paragraph: 'MULTIPLE_LANGUAGES_LIKE_ENGLISH_SPANISH_PORTUGUESE_AND_GERMAN',
      image: './assets/images/icons/tmfeLenguage.svg'
    },
    {
      _id: 4,
      title: null,
      paragraph: 'BASED_ON_COMMON_PLATFORMS_GOOGLE_MATERIAL_JAVA_TOMCAT_MARIADB_WHICH_DO_NOT_REQUIRE_LICENSING',
      image: './assets/images/icons/tmfeLayers.svg'
    },
    {
      _id: 5,
      title: null,
      paragraph: 'USES_OPEN_DATA_ENCODING_SCHEMES_JSON_THAT_FACILITATES_INTERACTION_WITH_OTHER_SYSTEMS_AND_HUMAN_UNDERSTANDING',
      image: './assets/images/icons/tmfeSchemas.svg'
    },
    {
      _id: 6,
      title: null,
      paragraph: 'ADAPTABILITY_BASED_ON_CUSTOMER_REQUESTS_REGARDING_COMMON_CHARACTERISTICS',
      image: './assets/images/icons/tmfeAdaptabilidad.svg'
    },
  ]

  api!: VgApiService;
  playerState$!: Observable<string>;
    
  videoPlay: boolean | undefined
  videoPause: boolean | undefined
  nCards = 'grid-cols-1 md:grid-cols-3'
  gridCols = 'grid-cols-1 md:grid-cols-6'
  spanCol1 = 'md:col-span-2'
  spanCol2 = 'md:col-span-3'
  startCol2 = 'md:col-start-4'
  
  constructor(
    private translate: TranslateService, 
    private i18nService: I18nServiceService,
    private playerState: PlayerStateService
    ) {
      let lang = localStorage.getItem('currentLang') || 'en';
      translate.setDefaultLang(lang);
      translate.use(lang);
      
    }
    
    ngOnInit(): void {
      this.playerState$ = this.playerState.state$;
    }


  onPlayerReady(api: VgApiService) {
    // console.log('playerReady');
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

}
