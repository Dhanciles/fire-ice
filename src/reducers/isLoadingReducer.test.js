import { isLoadingReducer } from './isLoadingReducer'

describe('isLoadingReducer', () => {
  it('should return default state', () => {
    const expected = false

    const result = isLoadingReducer(undefined, {})

    expect(result).toEqual(expected)

  })
})