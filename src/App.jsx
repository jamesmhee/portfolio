import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './index.css'
import Layout from './components/Layout'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='work' element={<Work />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Routes>
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
