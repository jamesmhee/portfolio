import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Element } from 'react-scroll'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './index.css'
import Layout from './components/Layout'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Layout>
        <Home/>
        <About />
        <Project />
        <Contact />
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
