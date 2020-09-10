import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  cliente:Cliente = new Cliente();
  clienteForm: FormGroup ;

  constructor(private  formBuilder:FormBuilder, private clienteService:ClienteService) { }

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      dni :[this.cliente.dni,Validators.required],
      nombre :['',Validators.required],
      TarjetaGold :['',Validators.required],
      apellido1 :['',Validators.required],
      apellido2 :['',Validators.required],
    })
  }

  altaCliente(){
    
    this.clienteService.create(this.cliente).subscribe(data => this.cliente = data)
    
  }

}
