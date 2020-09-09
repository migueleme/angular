export class Producto{
    codigo :{
        codigoProducto:  string,
        codigoProveedor: string
    };
    nombre: string;
    peso: number;
    tipoProducto: string;

    constructor(
        codigo? :{
            codigoProducto:  string,
            codigoProveedor: string
        },
        nombre?: string,
        peso?: number,
        tipoProducto?: string
    ){
        this.codigo =codigo;
        this.nombre=nombre;
        this.peso=peso;
        this.tipoProducto=tipoProducto;       
    }
}
