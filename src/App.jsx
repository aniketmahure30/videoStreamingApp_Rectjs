import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './pages/navbar/Navbar'
import StreamBaseRoutes from './routes/StreamBaseRoutes' //? all Routes
import { ToastContainer, toast } from 'react-toastify';   //?for popup message
import 'react-toastify/dist/ReactToastify.css'; //?for popup message

const App = () => {
  return (
    
    <BrowserRouter>
    <header>
      <Navbar/>
    </header>
    <main>
      <ToastContainer pauseOnHover theme='dark'/>
      <StreamBaseRoutes/>
    </main>
    
    </BrowserRouter>
  )
}

export default App
