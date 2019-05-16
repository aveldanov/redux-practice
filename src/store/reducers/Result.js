import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';



const initialState = {
  results: []
}

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter((result) => {
    console.log(result);
    console.log(action);
    return result.id !== action.resultElemId
  })
  return (
    updateObject(
      state, {
        results: updatedArray
      })
  )

}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.result
        })
      })
    // return {
    //   ...state,
    //   results: state.results.concat({
    //     id: new Date(),
    //     value: action.result
    //   })
    // }

    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results]
      // newArray.splice(id, 1)

      // const updatedArray = state.results.filter((result) => {
      //   console.log(result);
      //   console.log(action);
      //   return result.id !== action.resultElemId
      // })
      // return updateObject(
      //   state, {
      //     results: updatedArray
      //   })

      // return {
      //   ...state,
      //   results: updatedArray
      // }
      return deleteResult(state, action)

  }
  return state;
}

export default Reducer;
