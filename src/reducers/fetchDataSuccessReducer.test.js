import { fetchDataSuccessReducer } from './fetchDataSuccessReducer'

describe('fetchDataSuccesReducer', () => {
  it('should return default state', () => {
    const expected = []

    const result = fetchDataSuccessReducer(undefined, {})

    expect(result).toEqual(expected)
  })
  it('should update state with houseData we want', () => {
    const mockData = [{house: 'Stark'}]
    const action = {
      type: 'FETCH_DATA_SUCCESS', 
      houseData: mockData
    }

    const expected = mockData

    const result = fetchDataSuccessReducer({}, action)

    expect(result).toEqual(expected)
  })
})