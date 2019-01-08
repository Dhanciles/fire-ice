import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../thunks/fetchData.js'
import HouseCard from '../HouseCard/HouseCard'

export class HouseCardContainer extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/houses'
    this.props.fetchData(url)
  }

  render() {
    const housesToRender = this.state.houseData.map(house => (<HouseCard {...house}/>))
    return (
      <main>
        { housesToRender }
      </main>
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