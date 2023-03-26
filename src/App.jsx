import { useState } from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import EmpCreate from './EmpCreate'
import EmpDetails from './EmpDetails'
import EmpEdit from './EmpEdit'
import EmployList from './EmployList'

function App() {
  

  return (
    
    <div className="App">
        <Routes>
          <Route path='/' element={<EmployList />} />
          <Route path='/create' element={<EmpCreate />} />
          <Route path='/edit/:empid' element={<EmpEdit />} />
          <Route path='/details/:empid' element={<EmpDetails />} />
        </Routes>
    </div>
  )

}

export default App
