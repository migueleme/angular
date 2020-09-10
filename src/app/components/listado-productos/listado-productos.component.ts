import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto-service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  
  productos:Producto[] = undefined;
  
  constructor(private productoService:ProductoService) { }

  ngOnInit() {
    this.productoService.getAll().subscribe(
      data => this.productos = data
    )
  
  }
  
  
  
}
