import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/more' element={<h1>More</h1>}/>
        <Route path='/contacts' element={<h1>Contacts</h1>}/>
      </Routes>
    </>
  )
}

export default App
