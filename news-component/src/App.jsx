import { useState } from 'react'
import News from './Components/News'
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <News></News>
      </BrowserRouter>
    </>
  )
}

export default App
