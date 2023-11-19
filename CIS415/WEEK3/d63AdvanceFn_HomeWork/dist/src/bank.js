/* 2.	In the following code the transactionsDB is publicly accessible to any code that has access to the bank object.
Instead of using the object literal for bank, write a makeBank function that will encapsulate and return the bank object.
Make the transactionsDB private by making it a local variable in the makeBank function instead of a property on the bank object.
*/
export function makeBank() {
    // Declare a variable to hold the customer transaction data making it private
    const transactionsDB = [
        { customerId: 1, customerTransactions: [10, 50, -40] },
        { customerId: 2, customerTransactions: [10, 10, -10] },
        { customerId: 3, customerTransactions: [5, -5, 55] }
    ];
    // declare a bank object that contain transactionDS, get Balance and Bank balance
    return {
        getBalance: function (id) {
            // Check if the customer id and the id matches
            const customer = transactionsDB.find(customer => customer.customerId === id);
            // Check if the customer exist
            if (customer) {
                let balance = 0;
                // Loop through customer to get the transaction
                for (const transactions of customer.customerTransactions) {
                    balance += transactions;
                }
                return balance;
            }
            else {
                // If the customer do not exist, return 0
                return 0;
            }
        },
        bankBalance: function () {
            let total = 0;
            // Calculate the bank total by iterating over the transaction database and calling the getBalance for each customer
            for (const trans of transactionsDB) {
                total += this.getBalance(trans.customerId);
            }
            return total;
        },
    };
}
