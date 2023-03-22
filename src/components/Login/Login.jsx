import React from 'react'
import css from './Login.module.scss'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const Login = () => {
  console.log("Login executing")
  return (
    <div className={css.wrapper}>
      <div className={css.login__form}>
        <p className={css.login__form_heading}>
          Login
        </p>
        <FormControl fullWidth className={css.login__form_input}>
          <TextField id="standard-basic" label="username" variant="outlined" />
        </FormControl>
        <FormControl fullWidth className={css.login__form_input}>
          <TextField id="standard-basic" label="Password" variant="outlined" />
        </FormControl>
        <FormControl fullWidth className={css.login__form_input}>
          <Button fullWidth variant="contained">Login</Button>
        </FormControl>
      </div>
    </div>)
}

export default Login
