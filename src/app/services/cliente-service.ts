import { CommonModule } from '@angular/common';
import { Injectable }   from '@angular/core';
import { environment }  from 'src/environments/environment';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import { Cliente } from '../model/cliente';

const urlBase = environment.urlBase;

@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  constructor(private http: HttpClient){

  }
  getAll():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(urlBase + "clientes"); 
  }

  create(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(urlBase + "clientes", cliente);
  }
 }