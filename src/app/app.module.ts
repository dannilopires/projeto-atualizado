import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MemoriaComponent } from './memoria/memoria.component';
import { PlaVideoComponent } from './pla-video/pla-video.component';
import { PlaMaeComponent } from './pla-mae/pla-mae.component';
import { GabineteComponent } from './gabinete/gabinete.component';
import { MonitorComponent } from './monitor/monitor.component';
import { ProcessadorComponent } from './processador/processador.component';
import { LoginComponent } from './login/login.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DesejosComponent } from './desejos/desejos.component';
import { PgInicioComponent } from './pg-inicio/pg-inicio.component';
import { MemoriaKingstonComponent } from './memoria-kingston/memoria-kingston.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MemoriaComponent,
    PlaVideoComponent,
    PlaMaeComponent,
    GabineteComponent,
    MonitorComponent,
    ProcessadorComponent,
    LoginComponent,
    CarrinhoComponent,
    DesejosComponent,
    PgInicioComponent,
    MemoriaKingstonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
