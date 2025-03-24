import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiclienteService } from '../../../service/apiCliente/apicliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from '../../../modesl/cliente';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dialog-cliente',
  imports: [
    FormsModule,
    MatFormFieldModule  
  ],
  templateUrl: './DialogCliente.html',
  styleUrl: './DialogCliente.scss'
})
export class DialogCliente {
    public nombre! : string;
    /* Aqui esta el constructooooooor */
    constructor(
        public dialogRef: MatDialogRef<DialogCliente>,
        public apicliente: ApiclienteService,
        public snackbar: MatSnackBar
    ){

    }
    /* Fin constructor */
    close(){
        this.dialogRef.close();
    }
    addCliente(){
        const cliente: Cliente= {"nombre":this.nombre};
        this.apicliente.add(cliente).subscribe(respuesta =>{
            if(respuesta.exito===1)
            {
                this.dialogRef.close();
                this.snackbar.open("Cliente Insertado con exito ","",{
                    duration: 2000
                } );
            }
        });
    }
}
