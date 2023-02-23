import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log("asd");
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmut = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/register",
        inputs
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          type="text"
          required
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="email"
          required
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          required
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmut}>Register</button>
        <p>This is an error!</p>
        <span>
          Do you have an account? <Link to="/login">Register</Link>
        </span>
      </form>
    </div>
  );
};
export default Register;
