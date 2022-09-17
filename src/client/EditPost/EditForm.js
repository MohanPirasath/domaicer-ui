import { useParams } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { API } from "../../App";

export function EditForm({ name, min, max, des }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const username = localStorage.getItem("currentOfusername");
  const Editpost = async (event) => {
    try {
      const post = await fetch(`${API}/updatePost/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          username: username,
          name: values.temname,
          min: values.temmin,
          max: values.temmax,
          des: values.temdes,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (post.status === 400 || !post) {
        window.alert("something went worng cannot able to update");
      } else {
        window.alert("Updated successfully");
        navigate("/project/post");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formvalidate = yup.object({
    temname: yup
      .string()
      .required("plz fill this")
      .min(2, "plz give bigger name")
      .max(1000),
    temmin: yup.number().required("plz fill the min amount").min(2),
    temmax: yup.number().required("plz fill the max amount").min(2),
    temdes: yup.string().required("this field is needed").min(2),
  });

  const { handleChange, handleSubmit, values, errors, handleBlur, touched } = useFormik({
    initialValues: {
      temname: `${name}`,

      temmin: `${min}`,
      temmax: `${max}`,
      temdes: `${des}`,
    },
    validationSchema: formvalidate,
    onSubmit: (values) => {
      Editpost(values);
    },
  });

  return (
    <div className="EditBackground">
      <form onSubmit={handleSubmit} className="EditForm">
        <TextField
          required
          id="outlined-required"
          label="Name of the project"
          sx={{ width: "23rem", marginTop: "5rem" }}
          name="temname"
          value={values.temname}
          error={errors.temname && touched.temname}
          helperText={errors.temname && touched.temname ? errors.temname : ``}
          onChange={handleChange}
          onBlur={handleBlur} />
        <TextField
          focused
          required
          id="outlined-required"
          label="Min Budget"
          type="number"
          sx={{ width: "23rem", marginTop: "5rem" }}
          name="temmin"
          value={values.temmin}
          error={errors.temmin && touched.temmin}
          helperText={errors.temmin && touched.temmin ? errors.temmin : ``}
          onChange={handleChange}
          onBlur={handleBlur} />
        <TextField
          focused
          required
          id="outlined-required"
          type="number"
          label="Max Budget"
          sx={{ width: "23rem", marginTop: "5rem" }}
          name="temmax"
          value={values.temmax}
          error={errors.temmax && touched.temmax}
          helperText={errors.temmax && touched.temmax ? errors.temmax : ``}
          onChange={handleChange}
          onBlur={handleBlur} />
        <TextField
          required
          type="text"
          id="outlined-required"
          label="Tell us more about the project"
          sx={{ width: "23rem", marginTop: "2rem" }}
          name="temdes"
          value={values.temdes}
          error={errors.temdes && touched.temdes}
          helperText={errors.temdes && touched.temdes ? errors.temdes : ``}
          onChange={handleChange}
          onBlur={handleBlur} />
        <TextField
          type="file"
          variant="standard"
          focused
          id="outlined-required"
          // defaultValue="d"
          label="Documents that might be helpful in explaining your brief here"
          sx={{ width: "23rem", marginTop: "2rem" }} />
        <Button variant="contained" sx={{ marginTop: "1rem" }} type="submit">
          submit
        </Button>
      </form>
    </div>
  );
}
