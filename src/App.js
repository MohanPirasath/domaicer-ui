// import logo from './logo.svg';
import "./App.css";

import "./Styles/Navbar.css";
import "./Styles/Below.css";
import "./Styles/MainText.css";
import "./Styles/Footer.css";
import "./Styles/Works.css";
import "./Styles/Login.css";
import "./Styles/Project.css";
import "./Styles/UserPost.css";
import "./Styles/EditForm.css";
import "./Styles/Apply.css";
import "./Styles/Showapply.css";



import * as React from "react";
// import Avatar from '@mui/material/Avatar';

import Projectpic from "./Assets/ProjectPic.jpg";
import Projectadd from "./Assets/Projectadd.jpg";

// import { color } from '@mui/system';


import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import { color } from "@mui/system";


import { NavBar } from "./Home/Navbar/NavBar.js";
import { BelowNav } from "./Home/webInfo/BelowNav.js";
import { MainText } from "./Home/webInfo/MainText.js";
import { Works } from "./Home/webInfo/Works.js";
import { Login } from "./users/Authentication/Login.js";
import { Logout } from "./Home/SimpleComponents/Logout.js";
import { Notfound } from "./Home/SimpleComponents/Notfound.js";
import { UserAppBar } from "./Home/Navbar/UserAppBar.js";
import { Footer } from "./Home/Footer/Footer.js";
import { ShowApplications } from "./client/GetPost/ShowApplications.js";
import { Apply } from "./users/ApplyForJob/Apply.js";
import { EditPost } from "./client/EditPost/EditPost.js";
import { ClientPost } from "./client/GetPost/ClientPost.js";
import { Userview } from "./users/GetJob/Userview.js";
import { ProjectAdd } from "./client/ADD POST/ProjectAdd.js";
import { ProjectLogin } from "./client/Authentication/ProjectLogin.js";
import { Signup } from "./users/Authentication/Signup.js";
import { ProjectSignup } from "./client/Authentication/ProjectSignup.js";

export const API = "https://domaincer-freelancingapp.herokuapp.com";

function App() {
  return (
    <div className="App">
      <Ui />
    </div>
  );
}

function Ui() {
  const [NavState, setNavstate] = useState("one");
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={[<NavBar />, <BelowNav />, <MainText />, <Footer />]}
        />
        <Route path="/info" element={[<NavBar />, <Works />, <Footer />]} />
        <Route path="/login" element={[<NavBar />, <Login />]} />
        <Route path="/logout" element={[<Logout />]} />
        <Route path="/Signup" element={[<NavBar />, <Signup />]} />
        <Route path="/project" element={[<NavBar />, <ProjectLogin />]} />
        <Route
          path="/project/ClientSignup"
          element={[<NavBar />, <ProjectSignup />]}
        />
        <Route path="/project/add" element={[<UserAppBar />, <ProjectAdd />]} />
        <Route
          path="/project/hire"
          element={[<UserAppBar />, <ShowApplications />]}
        />
        <Route
          path="/project/post"
          element={[<UserAppBar />, <ClientPost />]}
        />
        <Route
          path="/project/post/:id"
          element={[<UserAppBar />, <EditPost />]}
        />
        <Route path="/user" element={[<UserAppBar />, <Userview />]} />
        <Route path="/user/:id" element={[<UserAppBar />, <Apply />]} />
        <Route path="*" element={[<Notfound />]} />
      </Routes>
      
    </div>
  );
}

export default App;
