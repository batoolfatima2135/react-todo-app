/* eslint-disable no-nested-ternary */
import React, { useState, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import useOnClickOutside from '../useOnClickOutside';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, dropdown, () => setDropdown(false));
  const links = [
    { path: '/', text: 'Home' },
    { path: 'about', text: 'About' },
    { path: 'profile', text: 'Profile' },
    { path: 'login', text: 'Login' },
  ];
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">TODO</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {links.map((link) => (
              <React.Fragment key={link.text}>
                {link.path === 'login' ? (
                  !user && (
                  <li className="nav-item" key={link.text}>
                    <NavLink className="nav-link" aria-current="page" to={link.path}>{link.text}</NavLink>
                  </li>
                  )
                ) : link.path === 'profile' ? (
                  user && (
                  <li className="nav-item" key={link.text}>
                    <NavLink className="nav-link" aria-current="page" to={link.path}>{link.text}</NavLink>
                  </li>
                  )
                ) : (
                  <li className="nav-item" key={link.text}>
                    <NavLink className="nav-link" aria-current="page" to={link.path}>{link.text}</NavLink>
                  </li>
                )}
              </React.Fragment>

            ))}
            {user && (
              <li className="nav-item">
                <button type="button" className="btn" onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
