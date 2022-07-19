
import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CssChangeService {

  currentRoute: string;
  constructor(private router: Router, @Inject(DOCUMENT) private _ducument:Document) {
    this.currentRoute = "home";
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        let cssUrl:String ='./assets/css/'
        this.currentRoute = event.url;
        if (this.currentRoute ==='/home'){_ducument.getElementById('css')?.setAttribute('href',`${cssUrl}style.css`); console.log(this.currentRoute);
        }
        if (this.currentRoute ==='/dashboard'){_ducument.getElementById('css')?.setAttribute('href','');}

   
      }


    });
  }
}
