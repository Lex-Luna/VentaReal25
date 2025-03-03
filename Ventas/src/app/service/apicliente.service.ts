import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../modesl/respuesta';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
/*  */
@Injectable({
  providedIn: 'root'
})

export class ApiclienteService {
  /* TODO: como saber si se esta consumiendo la url? */
  private url: string = "http://localhost:5277/api/cliente";
  private _http = inject(HttpClient);
  constructor(
    private http: HttpClient
  ) { }

  /* ngOnInit(): void{
    this.getClientes
  } */
  getClientes(): Observable<Respuesta> {
    return this._http.get<Respuesta>(this.url);
    //console.log(respuesta);
  }
}
