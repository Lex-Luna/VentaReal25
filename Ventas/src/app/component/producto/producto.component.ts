import { Component } from '@angular/core';
import { ApiproductoService } from '../../service/apiproducto.service';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  constructor(
    apiProducto: ApiproductoService
  ){
    apiProducto.getClientes().subscribe(respuesta =>{
      console.log(respuesta);
    }) 
  }

}
