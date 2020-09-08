import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';

@Component({
  selector: 'app-alta-pedido',
  templateUrl: './alta-pedido.component.html',
  styleUrls: ['./alta-pedido.component.css']
})
export class AltaPedidoComponent implements OnInit {

  pedido:Pedido = new Pedido();

  constructor() { }

  ngOnInit() {
  }

  crear(){

    //llamamos al servicio para crearlo

    //si el formulario 

    //navegare al listado de pedidos, o a la ficha de pedido

  }
  /**
   * 
<form [formGroup]= "productForm" (submit)=create()>
  <input type="text" formControlName="codigo" /><br>
  <input type="text" formControlName="fecha" /><br>
  <input type="text" formControlName="tipoDeEntrega" /><br>
  <input type="text" formControlName="cliente" /><br>
  <input type="text" formControlName="detalle" /><br>
  <input type="text" formControlName="direccion" /><br>
  <input type="text" formControlName="poblacion" /><br>
  <input type="text" formControlName="codigoPostal" /><br>
  <input type="text" formControlName="provincia" /><br>
  <input type="text" formControlName="pais" /><br>
  <button type="submit">Crear</button>          
</form> 
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
   */
}
