import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto-service';
import { Producto } from 'src/app/model/producto';
import { Pedido } from 'src/app/model/pedido';
import { PedidoService } from 'src/app/services/pedido-service';

@Component({
  selector: 'app-ficha-detalle-pedido',
  templateUrl: './ficha-detalle-pedido.component.html',
  styleUrls: ['./ficha-detalle-pedido.component.css']
})
export class FichaDetallePedidoComponent implements OnInit {

  constructor(private pedidoService : PedidoService,
    private activatedRoute: ActivatedRoute) { }
    pedido : Pedido ; 

  ngOnInit() {

  let o  =this.activatedRoute.params.subscribe(
      params => {
        let id = params['id'];
        this.pedidoService.getById(id).subscribe(
          d => this.pedido = d 
        );
      } 
    );
  }

}
