import { CommonModule } from '@angular/common';
import { Injectable }   from '@angular/core';
import { environment }  from 'src/environments/environment';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import { Producto } from '../model/producto';


const urlBase = environment.urlBase;

@Injectable({
  providedIn: 'root'
})

export class ProductoService {
  constructor(private http: HttpClient){

  }
  getAll():Observable<Producto[]>{
    return this.http.get<Producto[]>(urlBase + "productos"); 
  }

 }