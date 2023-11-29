import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { I18nServiceService } from 'src/app/i18n-service/i18n-service.service';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.sass']
})
export class CallToActionComponent implements OnInit {

  constructor(
    private router: Router,
    private translate: TranslateService, 
    private i18nService: I18nServiceService
  ) {
    translate.setDefaultLang('en');
   }

  ngOnInit(): void {    
    this.i18nService.localeEvent.subscribe(locale => this.translate.use(locale)); 
  }

  goTo($event:any):void {
    this.router.navigate(['/contact'])
  }
}

