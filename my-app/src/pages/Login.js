import "./login.css";
import { useFormik } from "formik";
import { LoginValidate } from "../Validate";
import axios from "axios";
import { toast } from "react-toastify";

const initialValues = { email: "", password: "" };

export const Login = () => {
  const { values, touched, errors, handleBlur, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: LoginValidate,
  });

  const loginHandle = () => {
    console.log("hiii");
    axios
      .post(
        "http://localhost:5000/user/login",

        {
          email: values.email,
          password: values.password,
        }
      )
      .then((data) => {
        console.log(data.data);
        if (data.data.status === 200) {
          toast.success(data.data.message);
        } else {
          toast.error(data.data.message);
        }
      })
      .catch((error) => console.log(error));
    console.log("hiii");
  };

  return (
    <div className="login">
      <div className="card">
        <h1>Login</h1>

        <div className="validate">
          <input
            type="text"
            name="email"
            value={values.email}
            autoComplete="off"
            placeholder="username/Email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? <p>{errors.email}</p> : null}
        </div>
        <div className="validate">
          <input
            type="text"
            placeholder="password"
            name="password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p>{errors.password}</p>
          ) : null}
        </div>
        <button
          type="submit"
          onClick={() => {
            loginHandle();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default Login;
