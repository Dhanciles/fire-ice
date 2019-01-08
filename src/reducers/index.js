import { combineReducers } from 'redux'; 
import { isLoadingReducer } from './isLoadingReducer';
import { hasErroredReducer } from './hasErroredReducer' ; 
import { fetchDataSuccessReducer } from './fetchDataSuccessReducer'; 

const rootReducer = combineReducers({
  hasErrored: hasErroredReducer, 
  isLoading: isLoadingReducer, 
  houseData: fetchDataSuccessReducer
})

export default rootReducer