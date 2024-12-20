﻿# OrderManagement
This project demonstrates the Observer Design Pattern implemented within an Order Management System. The system allows for real-time notifications and updates to be sent to various observers whenever a new order is added. The goal of this implementation is to showcase how the Observer Pattern can be effectively used to manage and notify multiple subscribers (observers) about changes in the state of a subject.

Features:
Add New Orders: Users can add new orders, which will then trigger updates to all registered observers.
Real-time Updates: Observers such as OrderListDisplay, NotificationService, and LogObserver react to changes by displaying orders, showing notifications, and logging the events.
Dynamic Observer Management: Observers can be dynamically registered and deregistered from the system as needed.
Why This Pattern?
This system utilizes the Observer Pattern to decouple the core business logic (OrderManager) from the various observer actions, allowing for a more modular and flexible system where components can be added or removed with ease.

This repository serves as a practical example of applying the Observer Pattern in a real-world application.
