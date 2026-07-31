import Product from "./Product.js";
import ProductPerishable from "./ProductPerishable.js";
import Store from "./Store.js";

//create the store
const myStore = new Store();

//create the products
const orange = new Product("Orange", 2.30, 50);
const oatmeal = new PerishableProduct("Oatmeal", 1.60, 80, "2026-12-31");
const yogurt = new PerishableProduct("Yogurt", 3.25, 15, "2026-08-20");
const vitamins = new Product("Vitamins", 5.00, 10);
const floss = new Product("Floss", 2.00, 30);

//add individual products to store
myStore.addProduct(orange);
myStore.addProduct(oatmeal);
myStore.addProduct(yogurt);
myStore.addProduct(vitamins);
myStore.addProduct(floss);

//print inventory value before the discount
console.log("Inventory Value BEFORE Discount:", myStore.getInventoryValue());

// apply a discount of 15% to inventory
Product.applyDiscount(myStore.inventory, 0.15);


console.log("Inventory Value after discount: ", myStore.getInventoryValue());

//find product by name
const foundProduct = myStore.findProductByName("Milk");
console.log(foundProduct ? foundProduct.toString() : "Product not found");