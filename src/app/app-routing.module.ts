import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListadoClientesComponent } from './components/listado-clientes/listado-clientes.component';

const routes: Routes = 
[
  { path:'home', component:HomeComponent }, 
  { path:'listado-clientes',component:ListadoClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
