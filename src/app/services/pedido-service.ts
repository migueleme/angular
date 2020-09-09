import { CommonModule } from '@angular/common';
import { Injectable }   from '@angular/core';
import { environment }  from 'src/environments/environment';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import { Pedido } from '../model/pedido';

const urlBase = environment.urlBase;

@Injectable({
  providedIn: 'root'
})

export class PedidoService {
  constructor(private http: HttpClient){

  }
  getAll():Observable<Pedido[]>{
    return this.http.get<Pedido[]>(urlBase + "pedidos"); 
  }
  create(pedidos:Pedido[]): Observable<Pedido>{
    return this.http.post<Pedido>(urlBase + "pedidos",pedidos);
  }

 }