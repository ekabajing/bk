import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { SlideComponent } from './slide/slide.component';
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './menus/menus.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuOrderComponent } from './menu-order/menu-order.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuHomeComponent,
    SlideComponent,
    HomeComponent,
    MenusComponent,
    MenuOrderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
