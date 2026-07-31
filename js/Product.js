//Base general product class

export default class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }   // 3 main elements of a product included in constructor

    // for calculating the value of a product
    getTotalValue() {
        return this.price + this.quantity;
    }

    // displays a string representation of a product
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

    static applyDiscount(products, discount) {
        products.foreach(product => {
            product.price -= product.price * discount;
        }); 
    }

}