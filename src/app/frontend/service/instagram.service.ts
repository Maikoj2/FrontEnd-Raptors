import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resinstagram } from '../interfaces/instagram';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  private InstagramUrl: string = 'https://graph.instagram.com/me/media'

  constructor(private http: HttpClient) { 

  }
  traerpublicaciones( fields:string, access_token:string): Observable<Resinstagram>{
   
    const url =`${this.InstagramUrl}?fields=${fields}&access_token=${access_token}`
    console.log(url);
    
    return this.http.get<Resinstagram>(url);
  }


}
