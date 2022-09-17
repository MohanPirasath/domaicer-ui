import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { API } from "../../App";

export function ShowApplications() {
  const username = localStorage.getItem("currentOfusername");

  const [applications, setapplications] = useState([]);

  useEffect(() => {
    fetch(`${API}/getApplications`)
      .then((data) => data.json())
      .then((data) => setapplications(data));
  }, []);
  const application = [];

  {
    applications.map((e) => {
      if (e.clientname == username) {
        application.push(e);
      }
    });
  }

  const Deleted = (id) => {
    fetch(`${API}/deleteApplication/${id}`, {
      method: "DELETE",
    }).then(() => {
      window.location.reload();
    });
  };

  const navigate = useNavigate();

  return (
    <div className="application">
      <div>
        <Button variant="contained" onClick={() => navigate("/project/add")}>
          ADD more post
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() => navigate("/project/post")}
          sx={{ marginTop: "2rem" }}
          color="secondary"
        >
          view old post
        </Button>
      </div>
      {application.map((apply) => {
        return (
          <div className="Applycard">
            <Card>
              <CardContent>
                <Typography variant="h4" component="div" color="black">
                  {apply.name} is applied for {apply.projectname}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, mr: 0 }}
                  variant="h6"
                  color="text.secondary"
                >
                  Budget: {apply.min} - {apply.max}
                </Typography>
                <Typography variant="body2">
                  Email ID : {apply.email}
                </Typography>
                <Typography variant="body2">
                  CONTACT NUMBER : {apply.phone}
                </Typography>

                <div>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      Deleted(apply._id);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
