import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import OrderProduct from 'src/app/models/OrderProduct';

@Component({
    selector: 'app-cart-left',
    templateUrl: './cart-left.component.html',
    styleUrls: ['./cart-left.component.css']
})
export class CartLeftComponent implements OnInit {
    @Input() orderProducts: OrderProduct[] = [];
    @Output() quantityChanged: EventEmitter<any> = new EventEmitter();
    @Output() removeClicked: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    handleRemoveClick(productId: number): void {
        this.removeClicked.emit(productId);
    }

    handleQuantityChange(payload: {id: number, quantity: number}): void {
        console.log(payload);
        this.quantityChanged.emit(payload);
    }
}
