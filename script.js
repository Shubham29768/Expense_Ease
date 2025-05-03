// Example static data for the dashboard and transactions
const transactions = [
    { id: 1, name: "Salary", amount: 2000, date: "2025-02-01", category: "income" },
    { id: 2, name: "Groceries", amount: -150, date: "2025-02-05", category: "expense" }
];

// Display recent transactions on the dashboard
function displayTransactions() {
    const list = document.getElementById('transactions-list');
    list.innerHTML = ''; // Clear any existing content

    transactions.forEach(transaction => {
        const li = document.createElement('li');
        li.textContent = `${transaction.name}: $${transaction.amount} on ${transaction.date}`;
        list.appendChild(li);
    });
}

// Run the function when the dashboard is loaded
document.addEventListener('DOMContentLoaded', displayTransactions);

// Add transaction form submission handling
document.getElementById('transaction-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('transaction-name').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;

    const newTransaction = { id: transactions.length + 1, name, amount, date, category };
    transactions.push(newTransaction);
    
    alert('Transaction added successfully!');
    displayTransactions();
});
