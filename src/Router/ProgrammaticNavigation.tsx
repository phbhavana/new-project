import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// Lazy load the components
const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Contact = React.lazy(() => import('./Contact'));
const Profile = React.lazy(() => import('./Profile'));
const UserProfile = React.lazy(() => import('./UserProfile'));
const Login = React.lazy(() => import('./Login')); 

export default function ProgrammaticNavigation() {
  return (
    <Router>
      <div>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              
            </ul>
          </nav>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="user/:userId" element={<UserProfile />} />
            <Route path="/profile" element={<ProtectedRoute element={<Profile />} />}/>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}
