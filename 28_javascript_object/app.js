let product = {
    name: "mouse",
    price: 1500,
    color: "black",
    category: "computer",
    size: "M",
    displayProduct: function () {
        return "Product Name: " + product.name + "\nPrice: " + product.price + "\nCategory: " + product.category;
    },
    discount: function () {
        return this.price - 1000;
    }
};

console.log(product.color);
console.log(product.size);
console.log(product.displayProduct());
console.log(product.discount());
