import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { API } from "../../App";

export function Userview() {
  const [post, setpost] = useState([]);
  const [re, setre] = useState("kk");

  useEffect(() => {
    fetch(`${API}/getPost`)
      .then((data) => data.json())
      .then((data) => {
        setpost(data);
      })
      .then((data) => {
        setre(data);
      });
  }, [re]);

  const navigate = useNavigate();

  return (
    <div>
      <div className="postsss">
        {post.map((posts, index) => {
          return (
            <div className="postsess" key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h4" component="div" color="black">
                    {posts.name}
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5, mr: 0 }}
                    variant="h5"
                    color="text.secondary"
                  >
                    Budget: {posts.min} - {posts.max}
                  </Typography>
                  <Typography variant="body2">{posts.des}</Typography>
                  <div>
                    {posts.Date}
                    <span style={{ marginLeft: "12rem" }}>{posts.Time}</span>
                  </div>

                  <Button
                    variant="contained"
                    sx={{ marginTop: "1rem" }}
                    color="success"
                    onClick={() => navigate(`/user/${posts._id}`)}
                  >
                    Intrested
                  </Button>
                  {/* <Button variant='contained' sx={{marginTop:"1rem",marginLeft:"3rem"}} color="error">delete</Button> */}
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
