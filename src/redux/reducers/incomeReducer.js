import { ADD_INCOME } from "../constants/constant";

const initialState = [];

const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INCOME:
      return [
        ...state,
        {
          incomeType: action.payload.incomeType,
          incomeAmount: Number(action.payload.incomeAmount) ,
          incomeDate: action.payload.incomeDate,
          key: action.payload.key
        },
      ];
      default: return state
  }
};

export default incomeReducer
