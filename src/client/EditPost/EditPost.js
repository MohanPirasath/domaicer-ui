import { useParams } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { EditForm } from "./EditForm";
import { API } from "../../App";

export function EditPost() {
  const [post, setpost] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API}/getPost/${id}`)
      .then((data) => data.json())
      .then((e) => setpost(e));
  }, []);

  return (
    <div>
      {post ? (
        <EditForm
          name={post.name}
          min={post.min}
          max={post.max}
          des={post.des} />
      ) : (
        "Loadin..."
      )}
    </div>
  );
}
