import React from "react";
import { useLastLocation } from "react-router-last-location";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { login } from "../../../redux/admin/actions";
import _ from "lodash";
import "./login.style.css";
const Login = ({ login, ...props }) => {
  const lastLocation = useLastLocation();
  const history = useHistory();
  const admin = useSelector((state) => state.admin.user);
  React.useEffect(() => {
    if (!_.isEmpty(admin)) {
      if (lastLocation) {
        return history.push(lastLocation.pathname);
      } else {
        return history.push("/");
      }
    }
    // eslint-disable-next-line
  }, [admin, lastLocation]);
  return (
    <div className="login">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            login(values, history, lastLocation, admin);
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className="login_form">
            <h3>Sign In</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  required
                  placeholder="Enter email"
                  name="email"
                  value={values.email || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <em style={{ color: "red" }}>{errors.email}</em>
                )}
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  placeholder="Password"
                  name="password"
                  value={values.password || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <em style={{ color: "red" }}>{errors.password}</em>
                )}
              </Form.Group>
              <div className="btn_login">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  style={{ width: "100%" }}
                >
                  {isSubmitting ? "Please Wait..." : "Login"}
                </Button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default connect(null, { login })(Login);
