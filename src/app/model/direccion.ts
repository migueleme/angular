export class Direccion{
    direccion:string;
    poblacion: string;
    codigoPostal: number;
    provincia: string;
    pais: string;
    constructor(
        direccion:string    ,
        poblacion: string   ,
        codigoPostal: number,
        provincia: string   ,
        pais: string        
    ){
    this.direccion      =direccion;
    this.poblacion      =poblacion;
    this.codigoPostal   =codigoPostal;
    this.provincia      =provincia;
    this.pais           =pais;
    }
}