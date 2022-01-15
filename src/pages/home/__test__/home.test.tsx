import { render } from 'react-dom'
import Home from '../index'
// import { MemoryRouter } from 'react-router-dom'
// import { createMemoryHistory } from 'history'

it('correct main route', () => {
  const root = document.createElement('div')
  //   const history = createMemoryHistory()
  //   document.body.appendChild(root)
  // Render app
  render(<Home />, root)

  //   expect(history.location.pathname).toBe('/')
  console.log()
})
