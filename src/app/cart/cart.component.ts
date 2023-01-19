import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})

export class CartComponent {
    menus: any[] = [];

    constructor(
        private menu_service: MenuService, 
    ) {}

    get total() {
        return this.menus?.reduce(
            (sum, menu) => ({
                quantity: 1,
                harga: sum.harga + menu.quantity * menu.harga,
            }),
            { quantity: 1, price: 0 }
        ).harga;
    }

}
