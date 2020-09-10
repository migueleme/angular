import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente-service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes:Cliente[] = undefined;
  displayedColumns: string[] = ["dniCol",
      "nombreCol",
      "apellido1Col",
      "apellido2Col",
      "tarjetaGoldCol",
      "opcionesCol"];
      
  constructor(private clienteService:ClienteService) { }
  ngOnInit() {
    this.clienteService.getAll().subscribe(
      data => this.clientes = data
    )
  }
}
