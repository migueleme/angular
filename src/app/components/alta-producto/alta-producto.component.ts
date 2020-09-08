import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {

  productoForm: FormGroup ;

  constructor(private  formBuilder:FormBuilder, private productoService:ProductoService, private router:Router) { }

  ngOnInit() {
      this.productoForm = this.formBuilder.group({
        codigoProducto :['',Validators.required],
        codigoProveedor :['',Validators.required],
        nombre :['',Validators.required],
        peso :['',Validators.required],
        tipoProducto :['',Validators.required],
      })
    }
  create(){
    console.log(this.productoForm.get('codigoProducto').value,this.productoForm.get('codigoProveedor').value );
    this.productoService.create(
      {    
        codigo :{
          codigoProducto:  this.productoForm.get('codigoProducto').value,
          codigoProveedor: this.productoForm.get('codigoProveedor').value
        },
        nombre:this.productoForm.get('nombre').value ,
        peso:this.productoForm.get('peso').value ,
        tipoProducto:this.productoForm.get('tipoProducto').value 
      }
    ).subscribe(
      //x => console.log(x)
      () => this.router.navigate(['listado-productos'])
      )
  }
  

}
