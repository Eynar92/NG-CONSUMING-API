import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Detalles } from '../interfaces/detalles.interface';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  public menu: any = [
    {
      titulo: 'Star Wars',
      icono: 'metismenu-icon pe-7s-star',
      subtitulo: 'Datos Star Wars',
      url: '/starwars'
    },
    {
      titulo: 'NASA',
      icono: 'metismenu-icon pe-7s-rocket',
      subtitulo: 'Noticias',
      url: '/nasa'
    }
  ];

  // url: string = 'https://swapi.dev/api/people/'; Forma UNO de hacer un get

  detallesP: any = [];

  // https://api.nasa.gov/planetary/apod?api_key=m4gMpfRd44ZdTsGn3THkPMNq5gYA8Pepx6gHVoTZ

  url: string='https://api.nasa.gov/planetary/apod?api_key=';
  apikey: string='fPB2HeM0SmDJlpazszLt8xZH1G6nUOSEcLvIaQTX';
  
  constructor(private http: HttpClient) { }

  datosStarWars() {
    // this.http.get(`${this.url}`); Forma UNO de hacer un get
    return this.http.get<any>('https://swapi.dev/api/people/'); // Forma DOS de hacer un get
  }

  cargarPersonaje(i: any) {
    return this.http.get<Detalles>(`https://swapi.dev/api/people/${i}/`)
      .pipe(
        map(resp => {
          return resp;
        })
      )
  }

  // Funcion datosNasa escrita en forma flecha
  // datosNasa = () => {
  //   return this.http.get(`${this.url}${this.apikey}`);
  // }
  // Funcion datosNasa escrita de forma normal
  datosNasa(){
    return this.http.get(`${this.url}${this.apikey}`);
  }
}
