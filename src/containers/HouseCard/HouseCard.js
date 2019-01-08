import React from 'react'
import { connect } from 'react-redux'

export const HouseCard = ({props}) => {
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
  houseData: state.houseData, 
  name: props.name, 
  seat: props.seats, 
  title: props.titles, 
  coatOfArms: props.coatOfArms, 
  ancestoralWeapons: props.ancestoralWeapons, 
  words: props.words
}) 

export default connect(mapStateToProps)(HouseCard)