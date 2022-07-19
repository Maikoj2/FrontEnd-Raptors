import { Injectable, ViewChild, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  @ViewChild('sidenavmain') sidenavmain!: ElementRef;
  body:any = document.getElementsByTagName('body')[0];
  className: string = 'g-sidenav-pinned';

  constructor() { }

  openClosetoggleNav(sidenav: ElementRef, iconSidenav:ElementRef){
    if (this.body.classList.contains(this.className)) {
      this.body.classList.remove(this.className);
      setTimeout(() => {
        sidenav.nativeElement.classList.remove('bg-white');
        
      }, 100);
      sidenav.nativeElement.classList.remove('bg-transparent');
  
    } else {
      
       
      this.body.classList.add(this.className);
      sidenav.nativeElement.classList.add('bg-white');
      sidenav.nativeElement.classList.remove('bg-transparent');
      iconSidenav.nativeElement.classList.remove('d-none');
    }
  }
}
