import { Routes } from '@angular/router';

import { HomeComponent } from '../component/home/home.component';
// ... existing code ...
export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "", redirectTo: 'home', pathMatch: "full" }
];
