import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import More from './Pages/More/More'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/more' element={<More/>}/>
        <Route path='/contacts' element={<h1>Contacts</h1>}/>
      </Routes>
    </>
  )
}

export default App
