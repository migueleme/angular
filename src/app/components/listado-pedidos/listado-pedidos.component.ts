import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';
import { PedidoService } from 'src/app/services/pedido-service';

@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.css']
})
export class ListadoPedidosComponent implements OnInit {

  pedidos:Pedido[] = undefined;
  
  constructor(private pedidoService:PedidoService) { }

  ngOnInit() {
    this.pedidoService.getAll().subscribe(
      data => this.pedidos = data
    )
  }

}
