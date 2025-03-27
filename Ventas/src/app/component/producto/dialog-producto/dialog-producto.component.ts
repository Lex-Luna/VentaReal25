import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiclienteService } from '../../../service/apiCliente/apicliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../../modesl/producto';
import { ApiproductoService } from '../../../service/apiProducto/apiproducto.service';

@Component({
  selector: 'app-dialog-producto',
  imports: [
    FormsModule,
    MatFormFieldModule  
  ],
  templateUrl: './dialog-producto.component.html',
  styleUrl: './dialog-producto.component.scss'
})

export class DialogProductoComponent {
  /* VARIABLES */
  public nombre!: string;
  public precioUnitario!: string;
  public costo!: string;

  /* FIN VARIABLES */
  /* CONSTRUCTOR */
  constructor(
    public dialogRef: MatDialogRef<DialogProductoComponent>,
    public apiProducto: ApiproductoService,
    public snackbar: MatSnackBar
){

}
/* Fin CONSTRUCTOR */  
/* FUNCIONES */
close(){
  this.dialogRef.close();
}

addProducto() {
  const producto: Producto = { 
    nombre: this.nombre,
    precioUnitario: this.precioUnitario,
    costo: this.costo
  };
  this.apiProducto.add(producto).subscribe(respuesta => {
    if(respuesta.exito === 1) {
      this.dialogRef.close();
      this.snackbar.open("Producto insertado con éxito", "", {
        duration: 2000
      });
    }
  });
}

/* FIN FUNCIONES */

}
