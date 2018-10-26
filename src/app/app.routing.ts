import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { PipesComponent } from './pages/pipes/pipes.component';

const appRoutes: Routes = [
    { path:'', component:HomeComponent },
    { path:'home', component:HomeComponent },
    { path:'requests', component:RequestsComponent },
    { path:'requests/:ident', component:RequestsComponent },
    { path:'pipes', component:PipesComponent }
];

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders = RouterModule.forRoot( appRoutes );

