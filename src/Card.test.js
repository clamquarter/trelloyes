import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import renderer from 'react-test-renderer'

it('renders without crash', () => {
    const div = document.createElement('div')

    ReactDOM.render(<Card />, div)
    ReactDOM.unmountComponentAtNode(div)
})

it('renders the UI as expected', () => {
    const tree = renderer
    .create(<Card title='james bond' content='lorem ipsum hipster' />)
    .toJSON()
    expect(tree).toMatchSnapshot()

})