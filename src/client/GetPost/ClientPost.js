import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { API } from "../../App";

export function ClientPost() {
  // const [post, setpost] =useState([]);
  const [yours, setyours] = useState([]);
  const [re, setre] = useState("kk");
  const username = localStorage.getItem("currentOfusername");

  useEffect(() => {
    fetch(`${API}/getPost`)
      .then((data) => data.json())
      .then((data) => {
        setyours(data);
      })
      .then((data) => {
        setre(data);
      });
  }, [re]);
  const post = [];

  {
    yours.map((e) => {
      if (e.username === username) {
        post.push(e);
      }
    });
  }

  const Deleteposts = (id) => {
    fetch(`${API}/deletePost/${id}`, {
      method: "DELETE",
    })
      .then(() => window.alert("Post deleted successfully"))
      .then(() => {
        window.location.reload();
      });
  };

  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Button
          variant="contained"
          sx={{ marginTop: "1rem" }}
          color="secondary"
          onClick={() => navigate("/project/add")}
        >
          add post
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          sx={{ marginTop: "1rem" }}
          color="secondary"
          onClick={() => navigate("/project/hire")}
        >
          Application
        </Button>
      </div>

      <div className="postss">
        {post.map((posts, index) => {
          return (
            <div className="postses" key={index}>
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
                  <Button
                    variant="contained"
                    sx={{ marginTop: "1rem", marginRight: "3.7rem" }}
                    color="warning"
                    onClick={() => navigate(`${posts._id}`)}
                  >
                    edit
                  </Button>
                  {/* <Button variant='contained' sx={{marginTop:"1rem",marginRight:"1rem"}} color="warning">Applications</Button> */}
                  <Button
                    variant="contained"
                    sx={{ marginTop: "1rem", marginLeft: "3.7rem" }}
                    color="error"
                    onClick={() => Deleteposts(posts._id)}
                  >
                    delete
                  </Button>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
