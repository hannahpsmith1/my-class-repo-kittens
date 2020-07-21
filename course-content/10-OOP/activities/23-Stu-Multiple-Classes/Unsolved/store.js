class Store {
  constructor(name, stock, revenue) {
   this.name = name;
   this.stock = stock; 
   this.revenue = 0; 
  }

  processProductSale(name) {
    this.revenue += order.item.price;
    this.orders.push(order);
    console.log(`Added #${order.id} to the queue`);
    this.printRevenue();
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;


