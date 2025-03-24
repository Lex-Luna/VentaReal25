import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Respuesta } from '../../modesl/respuesta';
//TODO DONDE ESTA ESTE API PRODUCTO

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
  /* constructor */
  constructor(
    private http: HttpClient
  ) { }
  /* Solicitud Get desde el el servicio */
  getProducto(): Observable<Respuesta> {
    return this._http.get<Respuesta>(this.url);
    //console.log(respuesta);
  }
  
}
