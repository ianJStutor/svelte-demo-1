const ordersDB = new Map();

export function createUser(userId) {
    if (!userId) userId = crypto.randomUUID();
    if (!ordersDB.has(userId)) ordersDB.set(userId, new Map());
    return readOrders(userId);
}

export function createOrder(userId, order = {}) {
    const orders = ordersDB.get(userId);
    if (!orders) return { err: "no user with that id" };
    const id = crypto.randomUUID();
    order.id = id;
    orders.set(id, order);
    return readOrder(userId, id);
}

export function readOrders(userId) {
    const user = ordersDB.get(userId);
    if (!user) return { err: "no user with that id" };
    const orders = [...user.values()];
    return { id: userId, orders };
}

export function readOrder(userId, orderId) {
    const user = ordersDB.get(userId);
    if (!user) return { err: "no user with that id" };
    const order = user.get(orderId);
    if (!order) return { err: "no order with that id" };
    return { id: userId, orders: [order] };
}

export function updateOrder(userId, orderId, newOrder = {}) {
    const user = ordersDB.get(userId);
    if (!user) return { err: "no user with that id" };
    const order = user.get(orderId);
    if (!order) return { err: "no order with that id" };
    order = Object.assign(order, newOrder);
    user.set(orderId, order);
    return readOrder(userId, orderId);
}

export function deleteOrder(userId, orderId) {
    const user = ordersDB.get(userId);
    if (!user) return { err: "no user with that id" };
    if (!user.has(orderId)) return { err: "no order with that id" };
    const deleted = user.delete(orderId);
    return { id: userId, orders: [{ id: orderId, deleted }] };
}

export function deleteUser(userId) {
    if (!ordersDB.has(userId)) return { err: "no user with that id" };
    const deleted = ordersDB.delete(userId);
    return { id: userId, deleted };
}