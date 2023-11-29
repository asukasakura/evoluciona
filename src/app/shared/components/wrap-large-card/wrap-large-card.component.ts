import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrap-large-card',
  templateUrl: './wrap-large-card.component.html',
  styleUrls: ['./wrap-large-card.component.sass']
})
export class WrapLargeCardComponent implements OnInit {

  @Input() dataLargeCards: Array<any> = []

  constructor() { }

  ngOnInit(): void {
  }

}
