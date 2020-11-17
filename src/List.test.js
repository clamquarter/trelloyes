import React from 'react'
import ReactDOM from 'react-dom'
import List from './List'
import renderer from 'react-test-renderer'

it('renders without crash', () => {
    const div = document.createElement('div')

    ReactDOM.render(<List key='test'
        header='test'
        cards={[]}/>, div)
    ReactDOM.unmountComponentAtNode(div)
})

it('renders the UI as expected', () => {
    const tree = renderer
    .create(<List key='test'
    header='test'
    cards={[]}/>)
    .toJSON()
    expect(tree).toMatchSnapshot()

})