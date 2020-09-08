export class Cliente{
    
    dni:string;
    nombre:string;
    tarjetaGold:boolean;
    apellido1:string;
    apellido2:string;
    

    constructor( nombre?:string, apellido1?:string, apellido2?:string, tarjetaGold?:boolean, dni?:string){
        this.apellido1=apellido1;
        this.apellido2=apellido2;
        this.dni=dni;
        this.nombre=nombre;
        this.tarjetaGold=tarjetaGold;
    }


}
