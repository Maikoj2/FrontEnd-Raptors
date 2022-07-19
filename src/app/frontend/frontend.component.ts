import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CssChangeService } from '../services/css-change.service';

declare function init_plugins():any;
declare var $ : any;


@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styles: [
  ]
})
export class FrontendComponent implements OnInit ,AfterViewInit{

  constructor(private cssChanges: CssChangeService) { }

  ngOnInit(): void {
   
    
  }
  ngAfterViewInit(): void {
    init_plugins()
    console.log('inicio plugins ');
  }
 

}
