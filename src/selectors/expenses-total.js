import expenses from './../tests/fixtures/expenses' 

const getExpensesTotal = (array) => {
    return array
        .map((item) => item.amount)
        .reduce((sum, value) => sum + value, 0)
    
}



export default getExpensesTotal