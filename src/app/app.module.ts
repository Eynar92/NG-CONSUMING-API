import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarwarsComponent } from './pages/starwars/starwars.component';
import { NasaComponent } from './pages/nasa/nasa.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { FormsModule } from '@angular/forms';
import { BuscarnombrePipe } from './pipes/buscarnombre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StarwarsComponent,
    NasaComponent,
    DetallesComponent,
    BuscarnombrePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
