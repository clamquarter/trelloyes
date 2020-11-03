import List from './List'
import React from 'react'
import './Card.css'


function Card(props){
 return   <div className='Card'>
 <button type='button'>
   Delete
 </button>
 <h3>Title{props.title}</h3>
 <p>Testing Card{props.content}</p>
   </div>
  
}

export default Card