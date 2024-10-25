import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticias } from '../interfaces/aritculos';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private Http: HttpClient) { }

  obtenerNoticias(){
  return this.Http.get<Noticias>("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f6b4f44bc55a4f52824071837f44352b")  
  }
}