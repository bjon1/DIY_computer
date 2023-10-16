import React from 'react'
import { useRoutes } from 'react-router-dom'
import Navigation from './components/Navigation'
import ViewComputers from './pages/ViewComputers'
import EditComputer from './pages/EditComputer'
import CreateComputer from './pages/CreateComputer'
import ComputerDetails from './pages/ComputerDetails'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <CreateComputer title='DIY COMPUTER | Customize' />
    },
    {
      path:'/custombuilds',
      element: <ViewComputers title='DIY COMPUTER | Custom Builds' />
    },
    {
      path: '/custombuilds/:id',
      element: <ComputerDetails title='DIY COMPUTER | View' />
    },
    {
      path: '/edit/:id',
      element: <EditComputer title='DIY COMPUTER | Edit' />
    }
  ])

  return (
    <div className='app'>
      <Navigation />

      { element }
    </div>
  )
}

export default App