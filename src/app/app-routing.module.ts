import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListadoClientesComponent } from './components/listado-clientes/listado-clientes.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { ListadoPedidosComponent } from './components/listado-pedidos/listado-pedidos.component';
import { AltaPedidoComponent } from './components/alta-pedido/alta-pedido.component';

const routes: Routes = 
[
  { path:'home', component:HomeComponent }, 
  { path:'listado-clientes',component:ListadoClientesComponent},
  { path:'listado-productos',component:ListadoProductosComponent},
  { path:'listado-pedidos',component:ListadoPedidosComponent},
  { path:'alta-pedido',component:AltaPedidoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
