import { mapStateToProps } from './HouseCard.js'

describe('mapStateToProps', () => {
  it('should return an object with a key of houseData', () => {
    const mockState = {
      houseData: [{house: 'stark'}]
    }

    const expected = {
      houseData: [{house: 'stark'}]
    }

    const result = mapStateToProps(mockState)

    expect(result).toEqual(expected)
  })
})