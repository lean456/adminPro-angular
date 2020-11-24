import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [
  
/**
 * '/dashboard', PagesRoutingModule
 * '/grafica1', PagesRoutingModule
 * '/progress', PagesRoutingModule
 * -------------
 * '/login',AuthRoutingModule,
 * '/register',AuthRoutingModule,
 */
  
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
PagesRoutingModule,AuthRoutingModule],
  
  exports: [RouterModule],
})
export class AppRoutingModule {}
