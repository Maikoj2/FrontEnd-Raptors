import { Component, ElementRef, OnInit } from '@angular/core';

declare function init_plugins():any;

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styles: [
  ]
})
export class SharedComponent  implements OnInit{
  sidenav!:ElementRef;
  iconSidenav!:ElementRef;

  constructor() { 

  }

  ngOnInit(): void {
    init_plugins()
    console.log('inicio plugins ');
    
  }


}
