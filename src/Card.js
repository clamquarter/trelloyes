import React from 'react'
import './Card.css'

class Card extends React.Component{
render(){
  return   (<div className='Card'>
  <button type='button'>
    Delete
  </button>
  <h3>Title{this.props.title}</h3>
  <p>Testing Card{this.props.content}</p>
    </div>)
}
}


export default Card