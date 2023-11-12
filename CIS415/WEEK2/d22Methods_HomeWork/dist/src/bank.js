/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
d.  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g.,
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.
Add any necessary types to the above bank object.
*/
export const bank = {
    debit: function (id, amount) {
        // Find the customer transaction record
        let customer = null;
        for (let records of bank.transactionsDB) {
            // Check the record
            if (records.customerId === id) {
                customer = records;
            }
        }
        // Get the current balance by summing up the transaction amount
        if (customer) {
            let customerCurrentBalance = customer.customerTransactions;
            let currentBalance = 0;
            for (let transaction of customerCurrentBalance) {
                // Add the transaction to the current balance
                currentBalance += transaction;
            }
            // Check if the current Balance if less than 0 and add to the customer transaction
            if (currentBalance < 0) {
                customer.customerTransactions.push(amount);
            }
            return bank.getBalance(id);
        }
        else {
            return undefined;
        }
    },
    credit: function (id, amount) {
        // Get the customerRecord
        let customer = null;
        const records = bank.transactionsDB;
        for (let record of records) {
            if (record.customerId === id) {
                customer = record;
            }
        }
        // Get customer balance
        if (customer) {
            let balance = customer.customerTransactions;
            let currentBalance = 0;
            for (let transaction of balance) {
                currentBalance += transaction;
            }
            // Check if the amount is positive
            if (currentBalance > 0) {
                customer.customerTransactions.push(amount);
            }
            return bank.getBalance(id);
        }
        else {
            return undefined;
        }
    },
    getBalance: function (id) {
        // Find the customer record
        let customer = null;
        for (let record of bank.transactionsDB) {
            if (record.customerId === id) {
                customer = record;
            }
        }
        // Calculate the balance by summing the transactions
        if (customer) {
            let currentBalance = customer.customerTransactions.reduce((acc, transaction) => acc + transaction, 0);
            return currentBalance;
        }
        return undefined;
    },
    saveTransaction: function (id, amount) {
        // Check the record
        let customer = null;
        for (let record of bank.transactionsDB) {
            if (record.customerId === id) {
                customer = record;
            }
        }
        // If customer is found, add the amount to the customer's list
        if (customer) {
            customer.customerTransactions.push(amount);
        }
        else {
            // If customer is not found, create a new customer record
            const newCustomer = {
                customerId: id,
                customerTransactions: [amount]
            };
            // Push the info to the database
            bank.transactionsDB.push(newCustomer);
        }
    },
    getBankBalance: function () {
        let totalBalance = 0;
        for (let record of bank.transactionsDB) {
            const currentBalance = record.customerTransactions.reduce((acc, transaction) => acc + transaction, 0);
            totalBalance += currentBalance;
        }
        return totalBalance;
    }
}; //define bank object as type Bank
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }
];
/* this is complete, no need to modify.
Saves this amount to the customerTransactions array for customerId id. */
bank.saveTransaction = function (customerId, amount) {
    const customer = bank.transactionsDB.find(customer => customer.customerId === customerId);
    if (customer) {
        customer.customerTransactions.push(amount);
    }
};
