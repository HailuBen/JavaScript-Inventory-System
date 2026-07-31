// subclass for expiration dated products

import Product from "./Product";    // import base class to use its elements

export default class PerishableProduct extends Product {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }  

    toString(){
        `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}
