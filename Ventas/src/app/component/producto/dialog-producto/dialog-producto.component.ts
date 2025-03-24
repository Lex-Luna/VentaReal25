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
/* TODO hacer formulario para ingresar nuevo poducto */
export class DialogProductoComponent {
  /* VARIABLES */
  public nombre! : string;

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
  

/* FIN FUNCIONES */

}
