import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListadoClientesComponent } from './components/listado-clientes/listado-clientes.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { ListadoPedidosComponent } from './components/listado-pedidos/listado-pedidos.component';
import { AltaPedidoComponent } from './components/alta-pedido/alta-pedido.component';
import { AltaClienteComponent } from './components/alta-cliente/alta-cliente.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { FichaDetallePedidoComponent } from './components/ficha-detalle-pedido/ficha-detalle-pedido.component';

const routes: Routes = 
[
  { path:'home', component:HomeComponent }, 
  { path:'listado-clientes',component:ListadoClientesComponent},
  { path:'listado-productos',component:ListadoProductosComponent},
  { path:'listado-pedidos',component:ListadoPedidosComponent},
  { path:'alta-pedido/:dni',component:AltaPedidoComponent},
  { path:'alta-pedido',component:AltaPedidoComponent},
  { path:'alta-cliente',component:AltaClienteComponent},
  { path:'alta-producto',component:AltaProductoComponent},
  { path:'ficha-detalle-pedido/:id',component:FichaDetallePedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
