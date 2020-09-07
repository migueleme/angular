export class Producto{
    codigo :{
        proveedor:  string,
        producto: string
    };
    nombre: string;
    peso: number;
    tipoProducto: string;
    constructor(
        codigo :{
            proveedor:  string,
            producto: string
        },
        nombre: string,
        peso: number,
        tipoProducto: string
    ){
        this.codigo.proveedor=codigo.proveedor;
        this.codigo.producto=codigo.producto;
        this.nombre=nombre;
        this.peso=peso;
        this.tipoProducto=tipoProducto;       
    }
}
