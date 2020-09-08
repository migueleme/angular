export class Producto{
    codigo :{
        codigoProducto:  string,
        codigoProveedor: string
    };
    nombre: string;
    peso: number;
    tipoProducto: string;

    constructor(
        codigo :{
            codigoProducto:  string,
            codigoProveedor: string
        },
        nombre: string,
        peso: number,
        tipoProducto: string
    ){
        this.codigo.codigoProducto=codigo.codigoProducto;
        this.codigo.codigoProveedor=codigo.codigoProveedor;
        this.nombre=nombre;
        this.peso=peso;
        this.tipoProducto=tipoProducto;       
    }
}
