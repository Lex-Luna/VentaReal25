import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ApiclienteService } from '../../app/service/apicliente.service';

@Component({
  selector: 'app-cliente',
  imports: [MatSidenavModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
  
})

export class ClienteComponent {
  constructor(
    //aqui vinculamos con el apiCliente
    private apicliente: ApiclienteService
  ){
    apicliente.getClientes().subscribe(respuesta =>{
      console.log(respuesta)
    })
  }
}
