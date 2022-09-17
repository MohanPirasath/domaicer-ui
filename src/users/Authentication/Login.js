import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../../Assets/logoicons.svg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useFormik } from "formik";
import { API } from '../../App';

export function Login() {
  const Logos = Logo;
  const navigate = useNavigate();





  const Insubmit = async (event) => {
    const fet = await fetch(`${API}/login`, {
      method: "POST",
      body: JSON.stringify({
        username: values.temuser,
        password: values.tempass,
      }),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    if (fet.status === 400 || !fet) {
      window.alert("Invalid credentials");
    } else {
      localStorage.setItem("currentOfusername", values.temuser);
      window.alert("successfull login");
      navigate("/user");
    }
  };





  // formvalidationSchema is used to validate the forms 
  const formvalidationSchema = yup.object({
    temuser: yup.string().required("UserName is required ⚠️"),

    tempass: yup.string().required("Password is required ⚠️"),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: {
      temuser: "",
      tempass: "",
    },
    validationSchema: formvalidationSchema,
    onSubmit: (values) => {
      Insubmit(values);

    },
  });


  return (
    <div className='Loginset'>
      <div className='LoginPage'>
        <Card>
          <CardContent>
            <img src={Logos} id="LoginLogo" alt='Logo'></img>
            <div>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 4,
                  // display: { xs: 'none', md: 'flex' },
                  fontFamily: 'cursive',
                  fontWeight: 900,
                  fontStyle: "italic",
                  // letterSpacing: '.3rem',
                  textDecorationColor: '#7865ff',
                  color: "black"
                }}
              >

                Freelance
              </Typography>
            </div>
            <div className='maketopspace'>
              <h3>
                Welcome Back
              </h3>
            </div>
            <div className='login_inputs'>
              <form className='login_inputs' onSubmit={handleSubmit}>
                <TextField
                  sx={{ marginTop: ".5rem" }}
                  id="outlined-name"
                  label="User ID"
                  name="temuser"
                  value={values.temuser}
                  error={errors.temuser && touched.temuser}
                  helperText={errors.temuser && touched.temuser ? errors.temuser : ``}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }} />
                <TextField
                  sx={{ marginTop: ".5rem" }}
                  id="outlined-name"
                  label="Password"
                  type="password"
                  name="tempass"
                  value={values.tempass}
                  error={errors.tempass && touched.tempass}
                  helperText={errors.tempass && touched.tempass ? errors.tempass : ``}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="current-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOpenIcon />
                      </InputAdornment>
                    ),
                  }} />
                <Button variant='contained' sx={{ marginTop: ".5rem" }} type="submit">
                  Log-In
                </Button>
              </form>
            </div>

          </CardContent>
        </Card>
      </div>

    </div>
  );
}
