import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobrenosComponent } from './components/sobrenos/sobrenos.component';
import { AreaComponent } from './components/area/area.component';
import { ContatoComponent } from './components/contato/contato.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sobre',
    component: SobrenosComponent,
  },
  {
    path: 'areas',
    component: AreaComponent,
  },
  {
    path: 'contato',
    component: ContatoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
