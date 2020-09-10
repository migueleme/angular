import { Direccion } from './direccion';
import { Cliente } from './cliente';
import { Producto } from './producto';
import { LineaPedido } from './LineaPedido';

export class Pedido{
    id : number;
    fecha: string;
    direccion : Direccion;
    tipoEntrega: string;
    cliente : Cliente;
    lineasPedido : LineaPedido[];
  
    constructor(
        id? : number,
        fecha?: string,
        direccion? : Direccion,
        tipoEntrega?: string,
        cliente? : Cliente,
        lineasPedido? : [
            {
                producto: Producto,
                cantidad: number
              }
        ]   
    ){
        this.id                 =id;                           
        this.fecha              =fecha;
        this.direccion          =direccion;
        this.tipoEntrega        =tipoEntrega;
        this.cliente            =cliente;
        this.lineasPedido       =lineasPedido;   
    }
}
