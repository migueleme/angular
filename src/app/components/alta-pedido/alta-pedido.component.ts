import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Producto } from 'src/app/model/producto';
import { PedidoService } from 'src/app/services/pedido-service';
import { Direccion } from 'src/app/model/direccion';
import { Cliente } from 'src/app/model/cliente';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alta-pedido',
  templateUrl: './alta-pedido.component.html',
  styleUrls: ['./alta-pedido.component.css']
})
export class AltaPedidoComponent implements OnInit {

  
  pedidoForm: FormGroup ;
  dni:string = '';
  constructor(private  formBuilder:FormBuilder, private pedidoService: PedidoService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => this.dni = params['dni']);
    this.pedidoForm = this.formBuilder.group({
      fecha :['',Validators.required],
      direccion :['',Validators.required],
      poblacion :['',Validators.required],
      codigoPostal :['',Validators.required],
      provincia :['',Validators.required],
      pais :['',Validators.required],
      tipoDeEntrega :['',Validators.required],
      dni :[this.dni,Validators.required],
      lineasDetalle : new FormArray([])
    });
  }
 annadirLinea() {
  (<FormArray>this.pedidoForm.controls['lineasDetalle']).push(new FormGroup({
    codigoProducto  :new FormControl('', Validators.required),
    codigoProveedor :new FormControl('', Validators.required),
    cantidad        :new FormControl('', Validators.required),
  }));
}
eliminarLinea(index: number) {
  (<FormArray>this.pedidoForm.controls['lineasDetalle']).removeAt(index);
}

  create(){
    let pedido:Pedido = new Pedido();                                                                                
    pedido.fecha                           = this.pedidoForm.get('fecha').value;
    pedido.direccion = new Direccion();
    pedido.direccion.direccion             = this.pedidoForm.get('direccion').value;
    pedido.direccion.poblacion             = this.pedidoForm.get('poblacion').value;
    pedido.direccion.codigoPostal          = this.pedidoForm.get('codigoPostal').value;
    pedido.direccion.provincia             = this.pedidoForm.get('provincia').value;
    pedido.direccion.pais                  = this.pedidoForm.get('pais').value;
    pedido.tipoDeEntrega                   = this.pedidoForm.get('tipoDeEntrega').value;
    pedido.cliente = new Cliente();
    pedido.cliente.dni                     = this.pedidoForm.get('dni').value; 
    let producto = new  Producto(); 
    let codigo = { codigoProducto : this.pedidoForm.get('codigoProducto').value,codigoProveedor: this.pedidoForm.get('codigoProveedor').value}
    producto.codigo = codigo;
    let cantidad                           = this.pedidoForm.get('cantidad').value;
    pedido.lineasPedido = [{producto, cantidad}] ;
    console.log(pedido);
    this.pedidoService.create([pedido]).subscribe(
      () => this.router.navigate(['listado-pedidos'])
    )
  }
}
