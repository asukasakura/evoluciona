import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrap-cards',
  templateUrl: './wrap-cards.component.html',
  styleUrls: ['./wrap-cards.component.sass']
})
export class WrapCardsComponent implements OnInit {
[x: string]: any;

  @Input() nCards : string = 'grid-cols-4'
  
  @Input() dataCards: Array<any> = []
  @Input() titlePosition: string = 'bottom'
  @Input() imageSize: string = ''
  // param = {value: 'world'};

  constructor() { }
 
  ngOnInit(): void {
  }

}
