import { Component, OnInit } from '@angular/core';

interface CartServicio {
  NombreClase: string,
  Descipcion: string
};
interface CartGalety {
    titulo: string,
    imgOriginal: string,
    img: string
  
  }

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {

  cartPrice: CartServicio[] = [
    {
      "NombreClase": 'Grupo Voleyball piso Masculino',
      "Descipcion": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'
    },
    {
      "NombreClase": 'Grupo Voleyball piso femenino',
      "Descipcion": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'
    },
    {
      "NombreClase": 'Grupo Voleyball piso iniciacion',
      "Descipcion": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'
    }
    ,
    {
      "NombreClase": 'Grupo Voleyball piso mixto',
      "Descipcion": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.'
    }
  ];
  Titulos: string[]=[
    "Nuestros servicios",
    "Precios",
    "galeria",
    "albunes"
  ]
  Galeria: CartGalety[]=[
    {
    "titulo": 'titulo del viaje',
    "imgOriginal":"../../../../assets/img/works/original-size/1.jpg",
    "img":"../../../../assets/img/works/thumbnail/1.jpg"
  },
    {
    "titulo": 'titulo del viaje',
    "imgOriginal":"../../../../assets/img/works/original-size/1.jpg",
    "img":"../../../../assets/img/works/thumbnail/1.jpg"
  },
    {
    "titulo": 'titulo del viaje',
    "imgOriginal":"../../../../assets/img/works/original-size/1.jpg",
    "img":"../../../../assets/img/works/thumbnail/1.jpg"
  },
    {
    "titulo": 'titulo del viaje',
    "imgOriginal":"../../../../assets/img/works/original-size/1.jpg",
    "img":"../../../../assets/img/works/thumbnail/1.jpg"
  },
    {
    "titulo": 'titulo del viaje',
    "imgOriginal":"../../../../assets/img/works/original-size/1.jpg",
    "img":"../../../../assets/img/works/thumbnail/1.jpg"
  },
]

constructor() { }

ngOnInit(): void {
 
}

}
