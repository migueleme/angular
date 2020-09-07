import { Direccion } from './direccion';
import { Cliente } from './cliente';

export class Pedido{
    codigo : number;
    fecha: string;
    direccionEntrega : Direccion;
    tipoDeEntrega: string;
    cliente : Cliente;
    detalle : string; //TODO cambiar a objeto detalle pedido cuando este solucionado
    constructor(
        codigo : number,
        fecha: string,
        direccionEntrega : Direccion,
        tipoDeEntrega: string,
        cliente : Cliente,
        detalle : string   
    ){
        this.codigo             =codigo;                           
        this.fecha              =fecha;
        this.direccionEntrega   =direccionEntrega;
        this.tipoDeEntrega      =tipoDeEntrega;
        this.cliente            =cliente;
        this.detalle            =detalle;
    
    }


}
