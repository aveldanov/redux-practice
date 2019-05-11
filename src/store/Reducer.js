import * as actionTypes from './Actions';



const initialState = {
  counter: 0,
  results: []
}



const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }

    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      }

    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      }

    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: state.counter
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
