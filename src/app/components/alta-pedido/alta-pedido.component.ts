import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Producto } from 'src/app/model/producto';
import { PedidoService } from 'src/app/services/pedido-service';

@Component({
  selector: 'app-alta-pedido',
  templateUrl: './alta-pedido.component.html',
  styleUrls: ['./alta-pedido.component.css']
})
export class AltaPedidoComponent implements OnInit {

  
  pedidoForm: FormGroup ;

  constructor(private  formBuilder:FormBuilder, private pedidoService: PedidoService) { }

  ngOnInit() {
      this.pedidoForm = this.formBuilder.group({
        fecha :['',Validators.required],
        direccion :['',Validators.required],
        poblacion :['',Validators.required],
        codigoPostal :['',Validators.required],
        provincia :['',Validators.required],
        pais :['',Validators.required],
        tipoDeEntrega :['',Validators.required],
        dni :['',Validators.required],
        codigoProducto :['',Validators.required],
        codigoProveedor :['',Validators.required],
        cantidad :['',Validators.required],
    });
  }

  crear(){
    let pedido:Pedido = new Pedido();                                                                                
    pedido.fecha                           = this.pedidoForm.get('fecha').value;
    pedido.direccion.direccion             = this.pedidoForm.get('direccion').value;
    pedido.direccion.poblacion             = this.pedidoForm.get('poblacion').value;
    pedido.direccion.codigoPostal          = this.pedidoForm.get('codigoPostal').value;
    pedido.direccion.provincia             = this.pedidoForm.get('provincia').value;
    pedido.direccion.pais                  = this.pedidoForm.get('pais').value;
    pedido.tipoDeEntrega                   = this.pedidoForm.get('tipoDeEntrega').value;
    pedido.cliente.dni                     = this.pedidoForm.get('dni').value; 
    let codigoProducto :string             = this.pedidoForm.get('codigoProducto').value
    let codigoProveedor:string             = this.pedidoForm.get('codigoProveedor').value
    let cantidad                           = this.pedidoForm.get('cantidad').value
    let codigo = {codigoProducto,codigoProveedor};
    let producto = new  Producto(codigo);  
    pedido.lineasPedido.push({producto, cantidad}) ;
    this.pedidoService.create(pedido).subscribe(
      pedido => console.log(pedido.id)
    )
    
  }
}
