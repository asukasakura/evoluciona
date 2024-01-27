import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    NewsPageComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule
  ]
})
export class NewsModule { }
