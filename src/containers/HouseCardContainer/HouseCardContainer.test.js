import { mapStateToProps, mapDispatchToProps } from './HouseCardContainer.js'
import { fetchData } from '../../thunks/fetchData.js'

describe('mapStateToProps', () => {
  it('should return an object with a key of houseData, error, isLoading', () => {
  
    const mockState = {
      houseData: [{house: 'stark'}], 
      error: false, 
      isLoading: false
    }

    const expected = {
      houseData: [{house: 'stark'}], 
      error: false,
      isLoading: false,
    }

    const result = mapStateToProps(mockState)

    expect(result).toEqual(expected)
  })
})
describe('mapDispatchToProps', () => {
  it('should call dispatch with a fetchData action when componentDidMount is called', () => {
    const mockUrl = 'www.final.com'
    const actionToDispatch = fetchData(mockUrl)
    const mockDispatch = jest.fn()

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.componentDidMount()

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)

  })
})