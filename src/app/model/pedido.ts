import { Direccion } from './direccion';
import { Cliente } from './cliente';
import { Producto } from './producto';

export class Pedido{
    codigo : number;
    fecha: string;
    direccionEntrega : Direccion;
    tipoDeEntrega: string;
    cliente : Cliente;
    detalle :[
        {
            producto: Producto,
            cantidad: number
          }
    ]; 
  
    constructor(
        codigo? : number,
        fecha?: string,
        direccionEntrega? : Direccion,
        tipoDeEntrega?: string,
        cliente? : Cliente,
        detalle? : [
            {
                producto: Producto,
                cantidad: number
              }
        ]   
    ){
        this.codigo             =codigo;                           
        this.fecha              =fecha;
        this.direccionEntrega   =direccionEntrega;
        this.tipoDeEntrega      =tipoDeEntrega;
        this.cliente            =cliente;
        this.detalle            =detalle;   
    }
}
