import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignupPage from './SignupPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './LoginPage'
import HomePage from './Home'
import WelcomePage from './Welcome'
import './App.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element = {<WelcomePage />}></Route>
      <Route path='/signup' element = {<SignupPage />}></Route>
      <Route path='/login' element = {<LoginPage />}></Route>
      <Route path='/home' element = {<HomePage />}></Route>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
