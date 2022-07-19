import { Component, Input, ElementRef,  } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent    {
  
  @Input() sidenav!: ElementRef;
  @Input() iconSidenav!: ElementRef;

  constructor(private  _SidebarService: SidebarService) { }

  openClosetoggleNav(){
  this._SidebarService.openClosetoggleNav(this.sidenav,this.iconSidenav)
  }

}
