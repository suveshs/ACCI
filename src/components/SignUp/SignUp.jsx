import React from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import css from './SignUp.module.scss'

const SignUp = () => {
  console.log("Sign up executing")
  return (<div className={css.wrapper}>
      <div className={css.signup__form}>
        <p className={css.signup__form_heading}>
          Sign Up
        </p>
        <FormControl fullWidth className={css.signup__form_input}>
          <TextField id="standard-basic" label="username" variant="outlined" />
        </FormControl>
        <FormControl fullWidth className={css.signup__form_input}>
          <TextField id="standard-basic" label="Email" variant="outlined" />
        </FormControl>
        <FormControl fullWidth className={css.signup__form_input}>
          <TextField id="standard-basic" label="Password" variant="outlined" />
        </FormControl>
        <FormControl fullWidth className={css.signup__form_input}>
          <Button fullWidth variant="contained">Sign-Up</Button>
        </FormControl>
      </div>
    </div>)
}

export default SignUp
