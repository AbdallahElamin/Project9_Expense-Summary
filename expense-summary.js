// Given a list of expenses, calculate useful totals and identify the
// largest expense. The final summary should reuse the smaller helper functions.

function calculateTotal(expenses=[]) { // should return the total amount spent.
    let total = 0

    function expensesHelperFunc (value) {
        total += value.amount;
    }

    expenses.forEach(expensesHelperFunc);

    return total;
}

function calculateCategoryTotal(expenses=[], category='') { // should return the total for one category.
    let total = 0;

    function categoryExpensesHelperFunc (value) {
        if (value.category === category) {
            total += value.amount;
        }
    }

    expenses.forEach(categoryExpensesHelperFunc);

    return total;
}

function findLargestExpense(expenses=[]) { // should return the full expense object with the largest amount.
    let largest = { id: 0, category: '', amount: 0};

    function largestHelperFunc (value) {
        if (largest.amount < value.amount) {
            largest = value;
        }
    }

    expenses.forEach(largestHelperFunc);

    return largest;
}

function createExpenseSummary(expenses=[]) { // should return total, foodTotal, transportTotal, and largestExpense.
    
}

// TEST

const expenses = [
  { id: 1, category: 'food', amount: 24 },
  { id: 2, category: 'transport', amount: 15 },
  { id: 3, category: 'food', amount: 18 },
  { id: 4, category: 'books', amount: 40 },
];

console.log(findLargestExpense(expenses));
// console.log(createExpenseSummary(expenses));
// console.log(calculateCategoryTotal(expenses, 'food'));
// console.log(calculateCategoryTotal(expenses, 'health'));
// console.log(findLargestExpense(expenses));