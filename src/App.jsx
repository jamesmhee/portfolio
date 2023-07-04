import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Element } from 'react-scroll'
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
        <Home/>
        <About />
        <Work />
        <Contact />
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
