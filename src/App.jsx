import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './index.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <div className='flex flex-col'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
