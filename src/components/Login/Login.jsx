import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import css from './Login.module.scss'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Login = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  if (props.isLoggedIn) {
    navigate('/')
  }

  const usernameHandler = (event) => {
    setUsername(event.target.value)
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value)
  }

  const loginHandler = () => {
    const data = {
      username,
      password
    }
    props.loginHandler(data)
  }

  return (
    <div className={css.wrapper}>
      <div className={css.login__form}>
        <p className={css.login__form_heading}>
          Login
        </p>
        <FormControl fullWidth className={css.login__form_input}>
          <TextField
            id="standard-basic"
            label="username"
            variant="outlined"
            onChange={usernameHandler}
            value={username}
          />
        </FormControl>
        <FormControl fullWidth className={css.login__form_input}>
          <TextField
            id="standard-basic"
            label="Password"
            variant="outlined"
            onChange={passwordHandler}
            value={password}
            type="password"
          />
        </FormControl>
        <FormControl fullWidth className={css.login__form_input}>
          <Button
            fullWidth
            variant="contained"
            onClick={loginHandler}
          >{props.isLoginBtnClick ? 'Logging in...' : 'Login'}</Button>
        </FormControl>
        {props.loginErrorMsg != '' && <>{props.loginErrorMsg} <br/><br/></>}
        <Link to="#">Forgot Password</Link>
        <Link to="#">Forgot Username</Link>
        <span>Don't have account: </span><Link to="/signUp" className={css.signup__btn}>Sign-Up</Link>
      </div>
    </div>)
}

export default Login
