//This closure exercise involves a common real-world scenario.  
export function createShoppingCart() {
    // Create variable to add or remove items
    let shoppingCart = [];
    //  Set type of  itemPrices as an object with string keys and number values
    let itemPrices = {};
    // Add some items and prices to the cart that should be private
    function addItem(item, price) {
        shoppingCart.push(item);
        itemPrices[item] = price;
        console.log(`${item} added to the cart.`);
    }
    // Remove items from the cart
    function removeItem(item) {
        // Get the position of the item from cart
        const pos = shoppingCart.indexOf(item);
        // Check if item if found in the cart 
        if (pos !== -1) {
            // Remove the item from the array and from the object
            shoppingCart.splice(pos, 1);
            delete itemPrices[item];
            console.log(`${item} removed from the cart.`);
        }
        else {
            console.log(`${item} is not found in the car.`);
        }
    }
    // Calculate total
    function getTotal() {
        let total = 0;
        for (const item of shoppingCart) {
            total += itemPrices[item];
        }
        console.log(`The total is ${total.toFixed(2)}`);
        return total;
    }
    return {
        addItem,
        removeItem,
        getTotal
    };
}
