import Card from './Card'
import React from 'react'
import './List.css'



function List(props){
    
    return ( <section className='List'>
    <header><h2>{props.header}List testing!</h2></header>
    <p>List test!
        <ul></ul>
    </p>
    <div className='List-cards'>
        {props.cards.map((card) => 
        <Card key={card.id}
        title={card.title}
        content={card.content}
    />)}

    <button
          type='button'
          className='List-add-button'
        >
            Add Card
    </button>
    </div>
    </section>
    )
        
}

export default List