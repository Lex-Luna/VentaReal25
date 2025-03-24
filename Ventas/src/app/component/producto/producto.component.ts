import { Component } from '@angular/core';
import { ApiproductoService } from '../../service/apiProducto/apiproducto.service';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-producto',
  imports: [MatSidenavModule,MatTableModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  public lst: any[] = [];//es solo para incializarlo
  public columnas: string[] = ["id", "nombre"];
  constructor(
    private apiProducto: ApiproductoService
  ){
    
  }

  ngOnInit(): void {
    this.getProductos();
  }
  
  getProductos(){
    this.apiProducto.getProducto().subscribe(respuesta =>{
      this.lst= respuesta.data;
      console.log(respuesta)
    })
  }

}
