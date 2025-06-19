import { useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router"
import Header from './component/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element="Testy" path="/testy"/>
      </Routes>
    
    </BrowserRouter>
    
      
  )
}

export default App
