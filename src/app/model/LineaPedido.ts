import { Producto } from './producto'

export class LineaPedido{

        producto: Producto;
        cantidad: number;

        constructor(producto: Producto, cantidad:number){
            this.producto = producto;
            this.cantidad = cantidad;
        }
}