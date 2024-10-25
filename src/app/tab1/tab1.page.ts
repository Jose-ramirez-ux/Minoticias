import { Component, } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';
import { Article } from '../interfaces/aritculos';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public articulos: Article[] = [];

  constructor(private servicio: NoticiasService) {}

  ngOnInit(){
    this.servicio.obtenerNoticias().subscribe((respuesta) =>{
      console.log(respuesta.articles);
      this.articulos.push(...respuesta.articles);
    });
  }
}
