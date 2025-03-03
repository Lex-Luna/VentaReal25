import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ApiclienteService } from '../../app/service/apicliente.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-cliente',
  imports: [
    MatSidenavModule,MatTableModule
  ],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
  
})

export class ClienteComponent {
  
  public lst: any[] = [];//es solo para incializarlo
  public columnas: string[] = ["id", "nombre"];

  constructor(//aqui vinculamos con el apiCliente
    private apicliente: ApiclienteService)
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
}
