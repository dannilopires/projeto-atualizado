import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DesejosComponent } from './desejos/desejos.component';
import { GabineteComponent } from './gabinete/gabinete.component';
import { LoginComponent } from './login/login.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { MonitorComponent } from './monitor/monitor.component';
import { PlaMaeComponent } from './pla-mae/pla-mae.component';
import { PlaVideoComponent } from './pla-video/pla-video.component';
import { ProcessadorComponent } from './processador/processador.component';
import { PgInicioComponent } from './pg-inicio/pg-inicio.component';
import { MemoriaKingstonComponent } from './memoria-kingston/memoria-kingston.component';

const routes: Routes = [
{
  path: 'carrinho',
  component: CarrinhoComponent
},
{
  path: 'desejos',
  component: DesejosComponent
},
{
  path: 'gabinete',
  component: GabineteComponent
},

{
path: 'pg-inicio',
component: PgInicioComponent
},

{ path: '', redirectTo: '/pg-inicio', pathMatch: 'full' },

{
  path: 'login',
  component: LoginComponent
},
{
  path: 'memoria',
  component: MemoriaComponent,
  children: [
    {
      path: 'memoria-kingston',
      component: MemoriaKingstonComponent
    }
  ]
},
{
  path: 'monitor',
  component: MonitorComponent
},
{
  path: 'pla-mae',
  component: PlaMaeComponent
},
{
  path: 'pla-video',
  component: PlaVideoComponent
},
{
  path: 'processador',
  component: ProcessadorComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
