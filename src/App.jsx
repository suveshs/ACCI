import React from 'react'
import Experties from './components/Experties/Experties'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Blog from './components/Blog/Blog'
import People from './components/People/People'
import Portfolio from './components/Portfolio/Portfolio'
import Work from './components/Work/Work'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import css from './styles/App.module.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/"
                 element={<><Hero/>
                            <Experties/>
                            <Blog/>
                            <Work/>
                            <Portfolio/>
                            <People/>
                            <Footer/>
                          </>}
          />
          <Route path="/login" element={<Login/>} />
          <Route path="/signUp" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
