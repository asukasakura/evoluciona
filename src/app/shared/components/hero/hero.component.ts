import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from 'src/app/i18n-service/i18n-service.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {
  isChildRoute = false;
  currentRouteName!: string;

  @Input() headText?: any = ''
  @Input() headTitle?: any = ''
  @Input() videobackground? : string = ''
  @Input() imagebackground? : string = ''
  @Input() horizontalAlign?: 'left' | 'right' | '' = ''
  @Input() mode: 'image' | 'video' = 'image'
  @Input() minHeight?: string = ''
  @Input() fontSize?: string = ''
  @Input() leading?: string = ''

  constructor(
    private translate: TranslateService, 
    private i18nService: I18nServiceService,
    private route: ActivatedRoute,
    private router: Router
    ) {
    translate.setDefaultLang('en');

    // Suscríbete a los eventos de navegación para verificar cuando cambia la ruta.
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.checkIfChildRoute();
    });
  }

  ngOnInit(): void {
    this.i18nService.localeEvent.subscribe(locale => this.translate.use(locale)); 
    // Verifica la ruta actual al inicializar el componente.
    this.checkIfChildRoute();
    this.route.url.subscribe(segments => {
      this.currentRouteName = segments.join('/');
    });
  }

  checkIfChildRoute() {
    // Obtiene la ruta actual
    let currentRoute = this.route;
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }
  
    // Verifica si la ruta actual es una hija de cualquier ruta con un segmento.
    if (currentRoute.routeConfig && currentRoute.routeConfig.path !== '') {
      this.isChildRoute = true;
      // Realiza las acciones que desees para rutas hijas de rutas con segmentos.
    } else {
      this.isChildRoute = false;
      // Realiza las acciones que desees para otras rutas.
    }
  }
}
