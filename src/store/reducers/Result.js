import * as actionTypes from '../actions/Actions';



const initialState = {
  results: []
}



const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.result
        })
      }

    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results]
      // newArray.splice(id, 1)
      const updatedArray = state.results.filter((result) => {
        console.log(result);
        console.log(action);
        return result.id !== action.resultElemId
      })

      return {
        ...state,
        results: updatedArray
      }

  }
  return state;
}

export default Reducer;
