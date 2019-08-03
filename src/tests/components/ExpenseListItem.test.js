import React from 'react'
import {shallow} from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

const testExpense = expenses[1]

test('should render expense list item correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...testExpense} />)
    expect(wrapper).toMatchSnapshot()
})