import { ADD_EXPENSE } from "../constants/constant";

const initialState = [];

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [
        ...state,
        {
          expenseType: action.payload.expenseType,
          expenseAmount: Number(action.payload.expenseAmount),
          expenseDate: action.payload.expenseDate,
          key: action.payload.key
        },
      ];
    default: return state
  }
};

export default expenseReducer;
