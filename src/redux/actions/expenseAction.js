import { ADD_EXPENSE } from "../constants/constant"

export const addExpense = (expenseData) => {
    return {
        type: ADD_EXPENSE,
        payload: expenseData
    }
}