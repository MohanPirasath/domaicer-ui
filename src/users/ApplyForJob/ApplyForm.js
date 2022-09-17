import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { API } from "../../App";


export function ApplyForm({ clientname, name, min, max, des }) {
  // const { id } = useParams();
  const navigate = useNavigate();

  const formvalidate = yup.object({
    temname: yup
      .string()
      .required("plz fill this")
      .min(2, "plz give bigger name")
      .max(1000),
    temphone: yup.number().required("plz fill the min amount").min(2),
    tememail: yup.string().required("plz fill the max amount").min(2),
  });

  const { handleChange, handleSubmit, values, errors, handleBlur, touched } = useFormik({
    initialValues: {
      temname: "",

      temphone: "",
      tememail: "",
    },
    validationSchema: formvalidate,
    onSubmit: (values) => {
      Apply(values);
    },
  });

  const Apply = async (event) => {
    try {
      const apply = await fetch(`${API}/apply`, {
        method: "POST",
        body: JSON.stringify({
          clientname: clientname,
          projectname: name,
          min: min,
          max: max,
          des: des,
          name: values.temname,
          email: values.tememail,
          phone: values.temphone,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (apply.status === 400 || !apply) {
        window.alert("something went worng cannot able to apply");
      } else {
        window.alert("posted successfully");
        navigate("/user");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="ApplyForm">
      <h4>
        Are you Intrested to Work with MR.{clientname} as {name} for the amount
        of {min} - {max} and the work is {des}. If you will please fill out the
        form below for proceed
      </h4>
      <div>
        <form className="ApplyFORM" onSubmit={handleSubmit}>
          <TextField
            label="NAME"
            required
            sx={{ marginTop: "2rem" }}
            focused
            name="temname"
            value={values.temname}
            error={errors.temname && touched.temname}
            helperText={errors.temname && touched.temname ? errors.temname : ``}
            onChange={handleChange}
            onBlur={handleBlur} />
          <TextField
            label="EMAIL ID"
            sx={{ marginTop: "2rem" }}
            focused
            name="tememail"
            value={values.tememail}
            error={errors.tememail && touched.tememail}
            helperText={errors.tememail && touched.tememail ? errors.temname : ``}
            onChange={handleChange}
            onBlur={handleBlur} />
          <TextField
            label="PHONE NO"
            sx={{ marginTop: "2rem" }}
            focused
            name="temphone"
            value={values.temphone}
            error={errors.temphone && touched.temphone}
            helperText={errors.temphone && touched.temphone ? errors.temphone : ``}
            onChange={handleChange}
            onBlur={handleBlur} />
          <Button variant="contained" sx={{ marginTop: "2rem" }} type="submit">
            Apply
          </Button>
        </form>
      </div>
    </div>
  );
}
