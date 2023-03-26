import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

import css from './SignUp.module.scss'

const SignUp = (props) => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  useEffect(() => {
    if (props.isSignUpSuccessful) {
      setUsername('')
      setEmail('')
      setPassword('')
      setPhoneNumber('')
    }
  }, [props.isSignUpSuccessful])

  const handlerSignUp = () => {
    const data = {
      username,
      email,
      phoneNumber,
      password
    }
    props.signUpHandler(data)
  }

  if (props.isLoggedIn) {
    navigate('/')
  }

  return (<div className={css.wrapper}>
      <div className={css.signup__form}>
        <p className={css.signup__form_heading}>
          Sign Up
        </p>
        <FormControl fullWidth className={css.signup__form_input}>
          <TextField
            id="standard-basic"
            label="username"
            variant="outlined"
            value={username}
            onChange={handleUsername}/>
        </FormControl>
        <FormControl fullWidth className={css.signup__form_input}>
          <TextField
            id="standard-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmail}/>
        </FormControl>
        <FormControl fullWidth className={css.signup__form_input}>
          <TextField
            id="standard-basic"
            label="Phone-Number"
            variant="outlined"
            value={phoneNumber}
            onChange={handlePhoneNumber}/>
        </FormControl>
        <FormControl fullWidth className={css.signup__form_input}>
          <TextField
            id="standard-basic"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={handlePassword}/>
        </FormControl>
        <FormControl fullWidth className={css.signup__form_input}>
          <Button fullWidth variant="contained" onClick={handlerSignUp}>{props.signingUp? "Signing Up..." : "Sign-Up"}</Button>
        </FormControl>
        {props.message !== '' && <span className={css.signup__form_message}>{props.message}<br/><br/></span>}
        <span>Already have an account: </span><Link to="/login">Login here</Link>
      </div>
    </div>)
}

export default SignUp
