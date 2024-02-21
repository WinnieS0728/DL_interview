type user = {
    userId: string,
    name: string,
    age: number
}
type order = {
    orderId: string,
    userId: string,
    product: string,
    price: number
}

const users: user[] = [
    {
        userId: "u01",
        name: "Alice",
        age: 28
    },
    {
        userId: "u02",
        name: 'Bob',
        age: 35
    }, {
        userId: 'u03',
        name: "Charlie",
        age: 22
    }
]
const orders: order[] = [
    { orderId: 'o01', userId: 'u01', product: 'Laptop', price: 1200 },
    { orderId: 'o02', userId: 'u02', product: 'Smartphone', price: 800 },
    { orderId: 'o03', userId: 'u01', product: 'Headphones', price: 150 },
    { orderId: 'o04', userId: 'u03', product: 'Camera', price: 1000 },
    { orderId: 'o05', userId: 'u02', product: 'Tablet', price: 500 },
]


export function getUserOrders() {
    const userOrders = users.map(user => ({
        ...user,
        orders: getOrderByUser({
            userId: user.userId,
            orderList: orders
        })
    }))
    console.log(userOrders);
    return userOrders
}


function getOrderByUser({
    userId,
    orderList
}: {
    userId: string,
    orderList: order[]
}) {
    const orderByUser = orderList.filter(order => order.userId === userId)
    return orderByUser
}
