import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
// import More from './Pages/More/More'
import Contacts from './Pages/Contacts/Contacts'
import NotFound from './Components/NotFound/NotFound'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/more' element={<More/>}/> */}
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
