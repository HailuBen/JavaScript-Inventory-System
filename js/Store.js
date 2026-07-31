// Store class to manage product inventory

export default class Store {

    constructor() {
        this.inventory = [];
    }

    //add product to inventory
    addProduct(product) {
        this.inventory.push(product);
    }

    getInventoryValue() {
        return this.inventory.reduce((total, product) => {
            return total + product.getTotalValue();
        }, 0);
        // Calculate the total inventory value by summing
        // each product's total value (price * quantity)
        // using reduce(), starting the accumulator at 0.
    }

    findProductByName(name){
        return this.inventory.find(product => product.name === name) || null;
    }   //use the find method to locate product based on its name
        // result will be null and not undefined if no match found 

}