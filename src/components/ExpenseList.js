import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from './../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No Expenses Found</p>
            ) : (
                props.expenses.map((item) => (
                    <ExpenseListItem {...item} key= {item.id}/>
                ))
            )
        }
    </div>
)

const mapStateToProp = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStateToProp)(ExpenseList)
