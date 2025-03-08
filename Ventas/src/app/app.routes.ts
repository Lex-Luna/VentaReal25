import { Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { ClienteComponent } from './component/cliente/cliente.component';
import { ProductoComponent } from './component/producto/producto.component';

// ... existing code ...
export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "", redirectTo: 'home', pathMatch: "full" },
    { path: "cliente", component: ClienteComponent },
    { path: "producto", component: ProductoComponent }
];
