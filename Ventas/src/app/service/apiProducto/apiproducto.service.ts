import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Respuesta } from '../../modesl/respuesta';
import { Producto } from '../../modesl/producto';

//TODO TENGO 2 APIPRODUCTO
const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiproductoService {
  private url: string = "http://localhost:5277/api/producto";
  private _http = inject(HttpClient);
  /* CONSTRUCTOR */
  constructor(
    private http: HttpClient
  ) { }
  /*FIN CONSTRUCTOR */
  /* Solicitud Get desde el el servicio */
  getProducto(): Observable<Respuesta> {
    return this._http.get<Respuesta>(this.url);
    //console.log(respuesta);
  }

  add(producto: Producto):Observable<Respuesta> {
    return this._http.post<Respuesta>(this.url, producto,httpOption);
  }
}
