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

// Task 7 
let employees = [
    {name: "Alice",position: "Developer", salary ; 70000},
    {name: "Bob",position: "Bob", salary: 500000},
    {name: "Charlie",position: "teller ": "Charlie",salary: 70000}

    function findemployees(employees, name,) {
        return employees.find(employee => employee.name === name);
    }



        console.log (findEmployee(employees,"Charlie"))

        // Task 8 Combiinding arrays 
        let orders1 = [
            {id: 1 ,customer: "Alice"},
            {id 2 , customer: "Bob"}
        ];
        let orders 2 = [
            {id: 1 ,customer: "Alice"},
            {id 2 , customer: "Bob"}
        ];

        funciton combineOrders(order1, order2){
            return [...order1, ...order2 ]

        }
        console.log(combineOrders(orders1 , orders 2 ))