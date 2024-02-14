import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Revenue from './Pages/Revenue'
import SideBar from './Components/SideBar'
import Navbar from './Components/Navbar'
import './App.css'

function App() {
  return (
    <Fragment>
      <SideBar/>
       <Navbar/>
      <Routes>
        <Route element={<Revenue />} path="/" />
      </Routes>
    </Fragment>
  )
}

export default App
