import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Dashbord from './Components/Dashbord'
import Jobpostings from './Components/Jobpostings'
import AISearch from './Components/AISearch'
import AccountManagement from './Components/AccountManagement'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       
        <Route path="/Dashbord" element={<Dashbord/>}></Route>
        <Route path="/Jobpostings" element={<Jobpostings/>}></Route>
        <Route path="/Aisearch" element={<AISearch/>}></Route>
        <Route path="/Account" element={<AccountManagement/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
