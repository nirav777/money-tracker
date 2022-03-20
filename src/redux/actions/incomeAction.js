import { ADD_INCOME } from "../constants/constant"

export const addIncome = (incomeData) => {
    return {
        type: ADD_INCOME,
        payload: incomeData
    }
}