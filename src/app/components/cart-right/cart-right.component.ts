import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import CheckoutInformation from 'src/app/models/CheckoutInformation';

@Component({
    selector: 'app-cart-right',
    templateUrl: './cart-right.component.html',
    styleUrls: ['./cart-right.component.css']
})
export class CartRightComponent implements OnInit {
    formControls: CheckoutInformation;
    @Input() orderTotal!: number;
    @Output() formSubmit: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.formControls = {
            firstName: '',
            lastName: '',
            streetAddress: '',
            addressUnit: '',
            city: '',
            state: '',
            zipCode: '',
            ccNumber: '',
            ccCode: '',
            ccDate: ''
        };
    }

    ngOnInit(): void {
    }

    submitForm() {
        const customer = {
            firstName: this.formControls.firstName,
            lastName: this.formControls.lastName
        };
        this.formSubmit.emit(customer);
    }
}
