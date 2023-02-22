import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input type="text" required placeholder="username" />
        <input type="email" required placeholder="email" />
        <input type="password" required placeholder="password" />
        <button>Register</button>
        <p>This is an error!</p>
        <span>
          Do you have an account? <Link to="/login">Register</Link>
        </span>
      </form>
    </div>
  );
};
export default Register;
