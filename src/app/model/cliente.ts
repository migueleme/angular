export class Cliente{
    nombre:string;
    fechaAlta:string;
    tarjetaGold:boolean;
    apellidos:string;
    dni:string;

    constructor( nombre:string,fechaAlta:string,tarjetaGold:boolean, apellidos:string, dni:string){
        this.apellidos=apellidos;
        this.dni=dni;
        this.fechaAlta=fechaAlta;
        this.nombre=nombre;
        this.tarjetaGold=tarjetaGold;
    }
}
