import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { NasaComponent } from './pages/nasa/nasa.component';
import { StarwarsComponent } from './pages/starwars/starwars.component';

const routes: Routes = [
  { path: 'starwars', component: StarwarsComponent },
  { path: 'nasa', component: NasaComponent },
  { path: 'starwars/detalles/:i', component: DetallesComponent },
  { path: '**', redirectTo: '/starwars', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
