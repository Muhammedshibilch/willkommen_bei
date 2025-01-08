
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import LatestNews from './pages/LatestNews'
import Company from './pages/Company'
import Shop from './pages/Shop'
import Sustianablity from './pages/Sustianablity'
import Team from './pages/Team'
import References from './pages/References'
import Downloads from './pages/Downloads'
import Contact from './pages/Contact'
import Header from './components/Header'
import Warrenty from './pages/Warrenty'
import Auth from './pages/Auth'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/latest-news' element={<LatestNews/>}/>
      <Route path='/company' element={<Company/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/sustainability' element={<Sustianablity/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/references' element={<References/>}/>
      <Route path='/Downloads' element={<Downloads/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/warrenty' element={<Warrenty/>}/>

    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
