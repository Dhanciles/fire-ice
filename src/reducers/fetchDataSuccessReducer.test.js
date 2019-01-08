import { fetchDataSuccessReducer } from './fetchDataSuccessReducer'

describe('fetchDataSuccesReducer', () => {
  it('should return default state', () => {
    const expected = []

    const result = fetchDataSuccessReducer(undefined, {})

    expect(result).toEqual(expected)
  })
})