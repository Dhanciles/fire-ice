import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../thunks/fetchData.js'
import HouseCard from '../HouseCard/HouseCard'
import { LandingPage, LoadingComponent } from '../../components/LoadingComponent/LoadingComponent.js'

export class HouseCardContainer extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/houses'
    this.props.fetchData(url)
  }

  render() {   
      const housesToRender = this.props.houseData.map(house => (<HouseCard {...house}/>))
     const content = ( <main>
                        {housesToRender}
                      </main>
                    )
      const componentToRender = this.props.isLoading ? <LoadingComponent/> : content
    return (
      componentToRender
    )
  }
}

export const mapStateToProps = (state) => ({
  houseData: state.houseData, 
  error: state.hasErrored, 
  isLoading: state.isLoading
})

export const mapDispatchToProps = (dispatch) => ({
  fetchData: (url) => dispatch(fetchData(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(HouseCardContainer)