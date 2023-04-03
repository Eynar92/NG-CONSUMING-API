import { Component } from '@angular/core';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent {

  data: any[] = [];
  nombreP = '';

  constructor(public datosService: DatosService) {
    this.datosStarWars();
  }

  datosStarWars() {
    this.datosService.datosStarWars()
      .subscribe(resp => {
        this.data = resp.results;
        console.log(this.data);
      })
  }
}
