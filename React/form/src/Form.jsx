import { useState } from "react";
import { useFormik } from "formik";
import "./Form.css";

export default function Form({ addComment }) {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: 5,
  // });

  // let handleInputChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   addComment(formData);

  //   setFormData({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    }
    if (!values.remarks) {
      errors.remarks = "Required";
    }
    if (!values.rating) {
      errors.rating = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      addComment(values);
    },
  });

  return (
    <div onSubmit={formik.handleSubmit}>
      <h4>Give a comment!</h4>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username ? (
            <p className="error">{formik.errors.username}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="remarks">Remarks: </label>
          <textarea
            name="remarks"
            id="remarks"
            value={formik.values.remarks}
            onChange={formik.handleChange}
          />
          {formik.errors.remarks ? (
            <p className="error">{formik.errors.remarks}</p>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating: </label>
          <input
            type="number"
            min="1"
            max="5"
            name="rating"
            id="rating"
            value={formik.values.rating}
            onChange={formik.handleChange}
          />
          {formik.errors.rating ? (
            <p className="error">{formik.errors.rating}</p>
          ) : null}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
