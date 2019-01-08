import React from 'react'
import { connect } from 'react-redux'

export const HouseCard = (props) => {
  return (
    <div className='house-card'>
      <h1>{props.name}</h1>
      <p>{props.founded}</p>
      <p>{props.titles}</p>
      <p>{props.coatOfArms}</p>
      <p>{props.ancestoralWeapons}</p>
      <p>{props.words}</p>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  houseData: state.houseData
}) 

export default connect(mapStateToProps)(HouseCard)