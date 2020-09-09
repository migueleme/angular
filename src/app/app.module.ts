import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListadoClientesComponent } from './components/listado-clientes/listado-clientes.component';
import { ListadoPedidosComponent } from './components/listado-pedidos/listado-pedidos.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { TrimestrePipe } from './pipes/trimestre.pipe';
import { AltaPedidoComponent } from './components/alta-pedido/alta-pedido.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AltaClienteComponent } from './components/alta-cliente/alta-cliente.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { FichaDetallePedidoComponent } from './components/ficha-detalle-pedido/ficha-detalle-pedido.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListadoClientesComponent,
    ListadoPedidosComponent,
    ListadoProductosComponent,
    TrimestrePipe,
    AltaPedidoComponent,
    AltaClienteComponent,
    AltaProductoComponent,
    FichaDetallePedidoComponent
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
