const item = {
    "name": "Biscouts",
    "type": "regular",
    "category": "food",
    "price": 2.0
}

const applyCoupon = a => b => c => {
    if (c.category === a) {
        c.price = c.price * (100 - b);
    }
    return c;
};
console.log(applyCoupon("food")(10)(item).price === 180);

