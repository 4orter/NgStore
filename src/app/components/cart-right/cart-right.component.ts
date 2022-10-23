import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-cart-right',
    templateUrl: './cart-right.component.html',
    styleUrls: ['./cart-right.component.css']
})
export class CartRightComponent implements OnInit {
    firstName: string = '';
    lastName: string = '';
    streetAddress: string = '';
    addressUnit: string = '';
    city: string = '';
    state: string = ''
    zipCode: string = '';
    ccNumber: string = '';
    ccCode: string = '';
    ccDate: string = '';
    @Input() orderTotal!: number;
    @Output() formSubmit: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    submitForm() {
        const customer = {
            firstName: this.firstName,
            lastName: this.lastName
        };
        this.formSubmit.emit(customer);
    }
}
