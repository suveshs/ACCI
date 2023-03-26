import React, { useEffect, useState } from 'react'
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

  const [message, setMessage] = useState(false)
  const [signingUp, IsSigningUp] = useState(false)
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false)
  const [isLoginBtnClick, setIsLoginBtnClick] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [loginErrorMsg, setLoginErrorMsg] = useState('')

  useEffect(() => {
    const username = localStorage.getItem("username")
    console.log("IUsername", username)
    if (username) {
      setIsLoggedIn(true)
      setUsername(username)
    }
  }, [])

  const signUpHandler = (data) => {
    IsSigningUp(true)
    setIsSignUpSuccessful(false)
    fetch("http://localhost:3000/api/users/signup", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(data => {
        if (data?.status === 0) {
          setMessage(data.message)
          setIsSignUpSuccessful(false)
        } else {
          setMessage("Sign-Up successfully done! Proceed login")
          setIsSignUpSuccessful(true)
        }
        IsSigningUp(false)
      })
      .catch(err => {
        console.log("Error: ", err)
        IsSigningUp(false)
      })
  }

  const loginHandler = (data) => {
    setIsLoginBtnClick(true)
    setLoginErrorMsg('')
    fetch("http://localhost:3000/api/users/login", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type" : "application/json"
      }
    }).then(response => response.json())
      .then(data => {
        if (data.status == 1) {
          setIsLoggedIn(true)
          setUsername(data.username)
          localStorage.setItem("username", data.username)
        } else {
          setLoginErrorMsg(data.message)
        }
        setIsLoginBtnClick(false)
      })
      .catch(err => {
        setLoginErrorMsg(err.message)
        setIsLoginBtnClick(false)
      })
  }

  const logoutHandler = () => {
    localStorage.clear()
    setIsLoggedIn(false)
    setUsername('')
  }

  return (
    <div className={`bg-primary ${css.container}`}>
      <BrowserRouter>
        <Header
          isLoggedIn={isLoggedIn}
          username={username}
          logoutHandler={logoutHandler}
        />
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
          <Route path="/login" element={<Login
                                          isLoginBtnClick={isLoginBtnClick}
                                          loginHandler={loginHandler}
                                          loginErrorMsg={loginErrorMsg}
                                          isLoggedIn={isLoggedIn}
                                        />} />
          <Route path="/signUp" element={<SignUp
                                           signUpHandler={signUpHandler}
                                           message={message}
                                           signingUp={signingUp}
                                           isSignUpSuccessful={isSignUpSuccessful}
                                           isLoggedIn={isLoggedIn}
                                         />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
