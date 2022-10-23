import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import OrderProduct from 'src/app/models/OrderProduct';

@Component({
    selector: 'app-cart-left-form',
    templateUrl: './cart-left-form.component.html',
    styleUrls: ['./cart-left-form.component.css']
})
export class CartLeftFormComponent implements OnInit {
    @Input() orderProduct!: OrderProduct;
    quantity: number = 1;
    @Output() quantityChange: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
        this.quantity = this.orderProduct.quantity;
    }

    sanitizeInput(e: any): void {
        if (!e.key || isNaN(+e.key) || e.target.value > 99) {
            e.preventDefault();
        }
    }

    handleQuantityChange() {
        const payload = {
            id: this.orderProduct.product.id,
            quantity: this.quantity
        }
        this.quantityChange.emit(payload);
    }
}
