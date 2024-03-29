## TW Join interview

### debounce

[code link](./utils/debounce.ts)

```ts
export function myDebounce<T extends any[]>(
  callback: (...arg: T) => void,
  ms: number,
) {
  let timer: ReturnType<typeof setTimeout> | undefined = undefined;

  return function (this: unknown, ...args: T) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, ms);
  };
}
```

### userOrders

[code link](./utils/order.ts)

```ts
export function getUserOrders() {
  const userOrders = users.map((user) => ({
    ...user,
    orders: getOrderByUser({
      userId: user.userId,
      orderList: orders,
    }),
  }));
  console.log(userOrders);
  return userOrders;
}

function getOrderByUser({
  userId,
  orderList,
}: {
  userId: string;
  orderList: order[];
}) {
  const orderByUser = orderList.filter((order) => order.userId === userId);
  return orderByUser;
}
```

### github search api

- next v14 app-router
- use `octokit` to make api request.
- type repo / user name and wait for auto search.
- use debounce input to set searchParams and make search request.
- repos is sort by stars.
- users is sort by followers.
- per_page = 10 to get TOP10.
