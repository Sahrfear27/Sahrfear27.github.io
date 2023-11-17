//This closure exercise involves a common real-world scenario.  

// This exercise uses closures to create a shopping cart. It encapsulates the cart array, allowing you to
//  add items, remove items, and calculate the total cost. The items and their prices are private and can only be 
//  accessed or modified through the provided methods, demonstrating the concept of closures in a different context.
// Exercise: Closure and a Shopping Cart

// Create a function that simulates a shopping cart. The cart should allow you to add items,
// remove items, and calculate the total cost. Items and their prices should be private
// and not directly accessible.

// type Item = {
//     item: string;
//     price: number;
// }

type Cart = {
    addItem: (item: string, price: number) => void;
    removeItem: (item: string) => void;
    getTotal: () => number;
}

export function createShoppingCart(): Cart {

    // Create variable to add or remove items
    let shoppingCart: string[] = [];
    //  Set type of  itemPrices as an object with string keys and number values
    let itemPrices: { [key: string]: number } = {};

    // Add some items and prices to the cart that should be private
    function addItem(item: string, price: number) {
        shoppingCart.push(item);
        itemPrices[item] = price;
        console.log(`${item} added to the cart.`)
    }


    // Remove items from the cart
    function removeItem(item: string) {
        // Get the position of the item from cart
        const pos = shoppingCart.indexOf(item);

        // Check if item if found in the cart 
        if (pos !== -1) {
            // Remove the item from the array and from the object
            shoppingCart.splice(pos, 1);

            delete itemPrices[item];
            console.log(`${item} removed from the cart.`)
        }
        else {
            console.log(`${item} is not found in the car.`)
        }
    }


    // Calculate total
    function getTotal(): number {
        let total = 0;
        for (const item of shoppingCart) {
            total += itemPrices[item];
        }
        console.log(`The total is ${total.toFixed(2)}`);
        return total;
    }
    return {
        addItem: addItem,
        removeItem: removeItem,
        getTotal: getTotal
    }
}


