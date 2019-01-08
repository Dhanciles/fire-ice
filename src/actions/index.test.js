import * as actions from './index.js'

describe('actions', () => {
  it('should have a type of IS_LOADING', () => {
    const expectedAction = {
      type: 'IS_LOADING', 
      isLoading: true
    }

    const result = actions.isLoading(true)

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of HAS_ERRORED', () => {
    const expectedAction = {
      type: 'HAS_ERRORED', 
      hasErrored: true
    }

    const result = actions.hasErrored(true)

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of FETCH_DATA_SUCCESS', () => {
    const mockHouseData = ['starks', 'lanisters', 'tyrell']
    
    const expectedAction = {
      type: 'FETCH_DATA_SUCCESS', 
      houseData: mockHouseData
    }

    const result = actions.fetchDataSuccess(mockHouseData)

    expect(result).toEqual(expectedAction)
    
  })
})