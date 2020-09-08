import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-alta-pedido',
  templateUrl: './alta-pedido.component.html',
  styleUrls: ['./alta-pedido.component.css']
})
export class AltaPedidoComponent implements OnInit {

  pedido:Pedido = new Pedido();
  pedidoForm: FormGroup;

  constructor(private  formBuilder:FormBuilder) { }

  ngOnInit() {
      this.pedidoForm = this.formBuilder.group({
      codigo            :[this.pedido.codigo],
      fecha             :[this.pedido.fecha            ],      
      tipoDeEntrega     :[this.pedido.tipoDeEntrega    ], 
      cliente           :[this.pedido.cliente          ], 
      detalle           :[this.pedido.detalle          ],
      direccion         :[this.pedido.direccionEntrega.direccion         ],
      poblacion         :[this.pedido.direccionEntrega.poblacion         ],
      codigoPostal      :[this.pedido.direccionEntrega.codigoPostal      ],
      provincia         :[this.pedido.direccionEntrega.provincia         ],
      pais              :[this.pedido.direccionEntrega.pais              ],
    });
  }

  crear(){

    //llamamos al servicio para crearlo

    //si el formulario 

    //navegare al listado de pedidos, o a la ficha de pedido

  }
 
}
