import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ApiclienteService } from '../../service/apicliente.service';
import { MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogActions, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogCliente } from './DialogCliente/DialogCliente';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-cliente',
  imports: [
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule
  ],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
  
}) 

export class ClienteComponent {
  
  public lst: any[] = [];//es solo para incializarlo
  public columnas: string[] = ["id", "nombre"];

  constructor(//aqui vinculamos con el apiCliente
    private apicliente: ApiclienteService,
    public dialog: MatDialog)
  {
    
  }
  //cREA UN METODO PARA REFRESCAR cLIENTES
  ngOnInit(): void {
    this.getCLientes();
  }
  
  getCLientes(){
    this.apicliente.getClientes().subscribe(respuesta =>{
      this.lst= respuesta.data;
      console.log(respuesta)
    })
  }
  // ... existing code ...
  openAdd(){
    const dialgorRef= this.dialog.open(DialogCliente,{
      width:"300"
    });
    dialgorRef.afterClosed().subscribe(result =>{
      this.getCLientes();
    })
    console.log("Esto si funciona");
  }
// ... existing code ...
}
