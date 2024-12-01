// OrderManagement.js

// Subject class (OrderManager)
class OrderManager {
    constructor() {
        this.orders = [];
        this.observers = [];
    }

    // Add a new order
    addOrder(order) {
        this.orders.push(order);
        this.notifyObservers(order); // Notify all observers about the new order
    }

    // Register an observer
    registerObserver(observer) {
        this.observers.push(observer);
    }

    deregisterObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Notify all observers
    notifyObservers(order) {
        this.observers.forEach(observer => observer.update(order));
    }
}

// Observer interface
class Observer {
    update(order) {
        // Implemented by concrete observers
    }
}

// Concrete Observer: OrderListDisplay
class OrderListDisplay extends Observer {
    constructor(listElement) {
        super();
        this.listElement = listElement;
    }

    update(order) {
        const li = document.createElement('li');
        li.textContent = order;
        this.listElement.appendChild(li);
    }
}

// Concrete Observer: NotificationService
class NotificationService extends Observer {
    constructor(notificationElement) {
        super();
        this.notificationElement = notificationElement;
    }

    update(order) {
        this.notificationElement.textContent = `New order received: ${order}`;
    }
}


// Initialize OrderManager (Subject)
const orderManager = new OrderManager();

// Create Observers
const orderListDisplay = new OrderListDisplay(document.getElementById('orderList'));
const notificationService = new NotificationService(document.getElementById('notificationArea'));

// Register Observers
orderManager.registerObserver(orderListDisplay);
orderManager.registerObserver(notificationService);

// Handle button click to add a new order
document.getElementById('addOrderBtn').addEventListener('click', () => {
    const orderInput = document.getElementById('orderInput');
    const newOrder = orderInput.value.trim();

    if (newOrder) {
        orderManager.addOrder(newOrder); // Add order and notify observers
        orderInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid order!');
    }
});
