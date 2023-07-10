import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || '/';
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    login(username);
    setUsername('');
    navigate(from, { replace: true });
  };
  return (
    <>
      <div className="container p-5 border my-5">
        <h1 className="text-center">Login</h1>
        <form className="row justify-content-center" onSubmit={handleSubmit}>
          <div className="mb-3 col-5">
            <h5>Username:</h5>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="example@abc.com"
              aria-describedby="emailHelp"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div>
          </div>
          <div className="mb-3 col-12 text-center">
            <button type="submit" className="btn btn-primary ">Submit</button>
          </div>
        </form>
      </div>
    </>

  );
};
export default Login;
