import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos-container',
  templateUrl: './titulos-container.component.html',
  styles: [
  ]
})
export class TitulosContainerComponent implements OnInit {
  @Input() title:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
