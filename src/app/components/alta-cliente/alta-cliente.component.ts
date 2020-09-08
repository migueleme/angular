import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente-service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  cliente:Cliente = new Cliente();

  constructor(private clienteService:ClienteService) { }

  ngOnInit() {
  }

  altaCliente(){
    this.clienteService.create(this.cliente).subscribe(data => {this.cliente = data
                                                                console.log("Cliente creado")})
  }

}
