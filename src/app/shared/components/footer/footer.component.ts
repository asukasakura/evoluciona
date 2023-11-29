import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  mainMenu: { 
    defaultOptions: Array<any>, accessLink: Array<any> }
     = { defaultOptions: [], accessLink: [] 
  }
  
  constructor() { }
  
  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'ABOUT_US',
        router: ['/', 'home']
      },
      {
        name: 'ITS',
        router: ['', 'its-transportation-systems']
      },
      {
        name: 'GLOBAL_SOURCING',
        router: ['/', 'sourcing-global']
      },
      {
        name: 'DEVELOPMENT_&_INNOVATION',
        router: ['/', 'development-innovation']
      },
      {
        name: 'CLIENTS_&_SUCCESS_STORIES',
        router: ['/', 'clients']
      },
      {
        name: 'NEWS',
        router: ['/', 'community']
      },
      {
        name: 'CONTACT',
        router: ['/', 'contact']
      }
    ]
    
  }

}
