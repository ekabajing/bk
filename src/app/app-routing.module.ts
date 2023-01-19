import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuOrderComponent } from './menu-order/menu-order.component';
import { MenusComponent } from './menus/menus.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'menus', component:MenusComponent},
  {path:'menu-order', component:MenuOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
