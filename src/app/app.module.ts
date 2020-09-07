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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListadoClientesComponent,
    ListadoPedidosComponent,
    ListadoProductosComponent,
    TrimestrePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
