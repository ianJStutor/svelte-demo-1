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
}