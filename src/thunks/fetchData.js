import { isLoading, hasErrored, fetchDataSuccess } from '../actions/index.js'
import { houseCleaner } from '../cleaner/cleaner.js'

export const fetchData = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error (response.statusText)
      }
      dispatch(isLoading(false))
      const data = await response.json()
      console.log(data)      
      const cleanData = houseCleaner(data)
      dispatch(fetchDataSuccess(cleanData))
    } catch(error) {
      dispatch(hasErrored(true))
    }
  }
}