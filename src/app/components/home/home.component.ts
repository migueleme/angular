import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente-service';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clientes:Cliente[] = undefined;
  
  constructor(private clienteService:ClienteService) { }

  ngOnInit() {
    this.clienteService.getAll().subscribe(
      data => this.clientes = data
    )
  }

}
