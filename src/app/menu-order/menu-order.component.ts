import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu-order',
    templateUrl: './menu-order.component.html',
    styleUrls: ['./menu-order.component.css']
})

export class MenuOrderComponent implements OnInit {
    active = 'one';
    menuList!: any[];
    menus: any[] = [];
    subTotal!: any;

    constructor(
        private menu_service: MenuService,
        private router: Router    
    ) {}

    ngOnInit() {
        this.menu_service.getAllMenu().subscribe({
            next: (res:any) => {
                console.log(res)
                this.menuList = res 
            },
            error: (error) => {
                alert(error);
            },
            complete: () => {
                console.log('Request Completed')
            },
        });
        
    }

    addToOrder(menu:any) {
        if (!this.menu_service.menuInCart(menu)) {
            menu.quantity = 1;
            this.menu_service.addToCart(menu);
            this.menus = [...this.menu_service.getMenu()];
            this.subTotal = menu.harga;
        }
    }

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
