// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet, NavLink } from 'react-router-dom';

const About = () => (
  <>
    <ul className="nav m-3">
      <li className="nav-item border mx-2">
        <NavLink className="nav-link" to="about-app">About App</NavLink>
      </li>
      <li className="nav-item border mx-2">
        <NavLink className="nav-link" to="about-developer">About Developer</NavLink>
      </li>
    </ul>
    <Outlet />
  </>
);
export default About;
