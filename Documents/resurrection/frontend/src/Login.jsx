import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
    const [values, setValues] = React.useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate();
    axios.defaults.withCredentials = true
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('---------',values)
        const controller = new AbortController();
        axios.post('http://localhost:7000/login', values, {
          signal: controller.signal
        })
          .then(res => {
            console.log(res.data)
            if (res.data.Status === "Success") {
              console.log(res.data)
              navigate('/')
            } else {
              alert(res.data.Error)
            }
          })
          .catch(err => {
            if (axios.isCancel(err)) {
              console.log('Request cancelled');
            } else {
              console.error(err);
            }
          });
      
        // Cancel the request when the component is unmounted
        return () => {
          controller.abort();
        };
      }
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2> Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
  type="email"
  placeholder="Enter your email :"
  value={values.email}
  onChange={(e) => setValues({ ...values, email: e.target.value.trim() })}
  className="form-control rounded-0"
  name="email"
/>                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input
                            type="password"
                            placeholder="Enter your password :"
                            value={values.password}
                            onChange={(e) => setValues({ ...values, password: e.target.value })}
                            className="form-control rounded-0"
                            name="password"
                            />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Log In</button>
                    <p> You don't have an account ?</p>
                    <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;