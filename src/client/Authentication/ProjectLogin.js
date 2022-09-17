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
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { API } from "../../App";

export function ProjectLogin() {
  const Logos = Logo;
  const navigate = useNavigate();

  const Insubmit = async (event) => {
    const fet = await fetch(`${API}/ClientLogin`, {
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
      navigate("/project/add");
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

  // const ProjectPic = Projectpic
  return (
    <div>
      <div className="ProjectPic">
        <div className="Loginsets">
          <div className="LoginPages">
            <Card>
              <CardContent>
                <img src={Logos} id="LoginLogos" alt="Logo"></img>
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
                <div className="maketopspaces">
                  <h3>Client Login</h3>
                </div>
                <div className="login_inputss">
                  <form className="login_inputss" onSubmit={handleSubmit}>
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
                    <Button
                      variant="contained"
                      sx={{ marginTop: ".5rem" }}
                      type="submit"
                    >
                      LogIn
                    </Button>
                  </form>
                </div>
                <div>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="clientsignup"
                  >
                    <h3 className="honproject">
                      Don't have an account, please here to creat an new
                      account.
                    </h3>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* <img id="ProjectPic" src={ProjectPic} alt="Photo can't able to load...."></img> */}
    </div>
  );
}
