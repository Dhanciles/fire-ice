import { isLoadingReducer } from './isLoadingReducer'

describe('isLoadingReducer', () => {
  it('should return default state', () => {
    const expected = false

    const result = isLoadingReducer(undefined, {})

    expect(result).toEqual(expected)
  })
  it('should update state if isLoading action is true', () => {
    const action = {
      type: 'IS_LOADING', 
      isLoading: true
    }

    const expected = true
  
    const result = isLoadingReducer(false, action)
  
    expect(result).toEqual(expected)
  })
  
})