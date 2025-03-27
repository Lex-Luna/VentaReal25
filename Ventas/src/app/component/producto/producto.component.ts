import { Component } from '@angular/core';
import { ApiproductoService } from '../../service/apiProducto/apiproducto.service';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { DialogProductoComponent } from './dialog-producto/dialog-producto.component';
import { Producto } from '../../modesl/producto';
import { response } from 'express';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-producto',
  imports: [
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule
  ],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  public lst: any[] = [];//es solo para incializarlo
  public columnas: string[] = ["id", "nombre","precioUnitario","costo"];
  constructor(
    private apiProducto: ApiproductoService,
    public dialog: MatDialog
  ){
    
  }

  ngOnInit(): void {
    this.getProductos();
  }
  //TODO RECUERDA ESTO ES EL  PRODUCTO_COMPONENT
  getProductos(){
    this.apiProducto.getProducto().subscribe(respuesta =>{
      this.lst= respuesta.data;
      console.log(respuesta)
    })
  }
  openAdd(){
    const dialgorRef= this.dialog.open(DialogProductoComponent,{
      width:"300"
    });
    dialgorRef.afterClosed().subscribe(result =>{
      this.getProductos();
    })
    console.log("Esto si funciona");
  }
  
}
