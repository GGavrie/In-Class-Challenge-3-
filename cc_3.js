//Task 5 

let orders = [
    {id: 101, customer: "Alice", total: 300},
    {id: 102, customer: "Bob", total: 450},
    {id: 103, customer: "Charlie", total: 200}
];

function findOrders(orders, orderID) {
    return orders.find(order => order.ID === orderID);
};

console.log(findOrders(orders,101));

// Task 6  create object inventory 
let inventory = {
    items: [],
    addItem(name, quantity) {
        this.items.push (( name, quantity ));

    };

inventory.addItem("Monitor", 5);
inventory.addItem("Keyboard", 10);
console.log(inventory.items);


let inventory= {
    iterms: [],
    addItem(name , quantity) {
        this.items.push({name, quantity });

    },
    removeLastItem(){
        this.items.pop()
    },
    removeFirstItem () {
        this.items.shift()

    }
}
inventory.addItem("Monitor", 5);
inventory.addItem("Keyboard",10);
inventory.addItem("Mouse", 3);

console.log(inventory.items);
inventory.removelatestItem();
console.log (inventory.items);
inventory.removeFirstItem();
console.log(inventory.items)