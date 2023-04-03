import { Component } from '@angular/core';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent {

  noticia: any;

  constructor(public datosService: DatosService) {
    this.cargarDatosNasa();
  }

  cargarDatosNasa() {
    this.datosService.datosNasa().subscribe(resp => {
      this.noticia = resp;
      console.log(this.noticia);
    })
  }

}
