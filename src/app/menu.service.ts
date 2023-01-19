import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class MenuService {
    menus: any[] = [];

    constructor(private http: HttpClient) { }

    getAllMenu() {
        return this.http.get('assets/data.json');
    }

    getMenu() {
        return this.menus;
    }

    saveCart(): void {
        localStorage.setItem('cart_items', JSON.stringify(this.menus));
    }

    addToCart(addMenu: any){
        this.menus.push(addMenu);
        this.saveCart();
    }

    loadCart(): void {
        this.menus = JSON.parse(localStorage.getItem('cart_items') as any) || [];
    }

    menuInCart(menu: any): boolean {
        return this.menus.findIndex((x: any) => x.id === menu.id) > -1;
    }

}
