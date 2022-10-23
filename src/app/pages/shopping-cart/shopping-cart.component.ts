import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import OrderProduct from 'src/app/models/OrderProduct';
import {CartService} from 'src/app/services/cart.service';
import {OrderService} from 'src/app/services/order.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
    cartItems: OrderProduct[] = [];
    cartTotal$: number = 0;
    totalSubscription!: Subscription;

    constructor(
        private cartService: CartService,
        private orderService: OrderService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.cartItems = this.cartService.getCartItems();
        this.totalSubscription = this.cartService.getCartTotal().subscribe((total: number) => {
            this.cartTotal$ = total;
        });
        this.cartService.updateTotal();
    }

    removeItem(productId: number): void {
        this.cartService.removeItem(productId);
        this.cartItems = this.cartService.getCartItems();
    }

    updateItemQuantity(payload: {id: number, quantity: number}): void {
        this.cartService.updateQuantity(payload.id, payload.quantity);
    }

    handleCartRightFormSubmit(customer: {firstName: string, lastName: string}): void {
        const order = this.orderService.generateOrder(`${customer.firstName} ${customer.lastName}`, this.cartTotal$);
        this.cartService.removeAllItems();
        this.router.navigate(
            ['/order-confirmation'],
            {queryParams: {orderId: order.id}}
        );
    }

    ngOnDestroy(): void {
        this.totalSubscription.unsubscribe();
    }
}
