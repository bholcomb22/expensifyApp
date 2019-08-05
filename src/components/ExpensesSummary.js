import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from './../selectors/expenses'
import getExpensesTotal from './../selectors/expenses-total'
import numeral from 'numeral'

const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    )
}


const mapStateToProp = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    }
}
export default connect(mapStateToProp)(ExpensesSummary)