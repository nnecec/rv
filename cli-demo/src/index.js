import React from 'react'
import ReactDOM from 'react-dom'

console.log('build done.')

function App () {
  return <div>Hello World!</div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
)
