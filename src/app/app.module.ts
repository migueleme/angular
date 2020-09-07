import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ListadoClientesComponent } from './components/listado-clientes/listado-clientes.component';
import { ListadoPedidosComponent } from './components/listado-pedidos/listado-pedidos.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListadoClientesComponent,
    ListadoPedidosComponent,
    ListadoProductosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
