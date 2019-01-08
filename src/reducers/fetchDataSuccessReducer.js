export const fetchDataSuccessReducer = (state=[], action) => {
  switch(action.type) {
    case 'FETCH_DATA_SUCCESS': 
      return action.houseData
    default: 
      return state
  }
}