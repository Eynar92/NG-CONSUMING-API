import { Component } from '@angular/core';
import { DatosService } from './service/datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'servicios';
  constructor(public datosService: DatosService) {
    

  }
}
