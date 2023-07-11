// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import Home from '../Routes/Home';
import About from '../Routes/About';
import Login from '../Routes/login';
import Profile from '../Routes/profile';
import NotMatch from '../Routes/NotMatch';
import Layout from './Layout';
import AboutSubContent from './AboutSubContent';
import ProtectedRoute from './ProtectedRoute';

const TodoApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path=":slug" element={<AboutSubContent />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route
        path="profile"
        element={(
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
      )}
      />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);
export default TodoApp;
