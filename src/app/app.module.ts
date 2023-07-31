import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaComponent } from './components/area/area.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeComponent } from './components/home/home.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { SobrenosComponent } from './components/sobrenos/sobrenos.component';
import { TituloComponent } from './components/titulo/titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaComponent,
    CabecalhoComponent,
    ContatoComponent,
    HomeComponent,
    RodapeComponent,
    SobrenosComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
