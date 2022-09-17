import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../../Assets/logoicons.svg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { API } from "../../App";

export function Signup() {
  const navigate = useNavigate();
  const Logos = Logo;

  const formvalidate = yup.object({
    temuser: yup
      .string()
      .required("plz fill this")
      .min(2, "plz give bigger name")
      .max(59),
    tempass: yup
      .string()
      .required("this is needy")
      .min(2)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        `Must contain
     one uppercase,
     lowercase, 
     number,special character`
      ),
  });

  const { handleChange, handleSubmit, values, errors, handleBlur, touched } = useFormik({
    initialValues: {
      temuser: "",

      tempass: "",
    },
    validationSchema: formvalidate,
    onSubmit: (values) => {
      signupsuccess(values);
    },
  });

  const signupsuccess = async (event) => {
    try {
      const fet = await fetch(`${API}/signup`, {
        method: "POST",
        body: JSON.stringify({
          username: values.temuser,

          password: values.tempass,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (fet.status === 400 || !fet || fet.status === 404) {
        window.alert("Try New Username");
      } else {
        window.alert("successfully signup");
        navigate("/user");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Loginset">
      <div className="LoginPage">
        <Card>
          <CardContent>
            <img src={Logos} id="LoginLogo" alt="Logo"></img>
            <div>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 4,
                  // display: { xs: 'none', md: 'flex' },
                  fontFamily: "cursive",
                  fontWeight: 900,
                  fontStyle: "italic",
                  // letterSpacing: '.3rem',
                  textDecorationColor: "#7865ff",
                  color: "black",
                }}
              >
                Freelance
              </Typography>
            </div>
            <div className="maketopspace">
              <h3>Sign Up</h3>
            </div>
            <div className="login_inputs">
              <form className="login_inputs" onSubmit={handleSubmit}>
                <TextField
                  sx={{ marginTop: ".4rem" }}
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
                  sx={{ marginTop: ".9rem" }}
                  id="outlined-name"
                  label="Password"
                  type="password"
                  value={values.tempass}
                  name="tempass"
                  error={errors.tempass && touched.tempass}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.tempass && touched.tempass ? errors.tempass : ``}
                  autoComplete="current-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOpenIcon />
                      </InputAdornment>
                    ),
                  }} />
                <Button
                  variant="contained"
                  sx={{ marginTop: ".5rem" }}
                  type="submit"
                >
                  Join as freelancer
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
