import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../../service/instagram.service';
import { Observable } from 'rxjs';
import { Resinstagram, Datum } from '../../interfaces/instagram';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  fields: string = "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username";
  Instagram:Datum[]=[]
  token:string ="IGQVJWMVZAXY0x5QmU0ZAXpCdENMTDBGSk91UEJxdzJib3BEUzFEdHRpbHAtSWFmc3dlYXRFVWNJbFFlVDZAlandleFVMaHhlNDE4MnBIMXNPTVpCQnBSOTZAyMGJBZAXlaN0hpbzNBYWZADYjN4MFFtdmY4VgZDZD";
  constructor(private publcaciones:InstagramService) { }
  
  
  ngOnInit(): void {
    this.publcaciones.traerpublicaciones(this.fields, this.token )
    .subscribe((data)=>{
       console.log(data.data);

      this.Instagram = data.data

    }) ;
  }
 
  validarTipoarchivo(tipo:string){
    
    if (tipo==="IMAGE" || tipo ==="CAROUSEL_ALBUM") {
      return true;
    }
    return false;
  }
  

}
