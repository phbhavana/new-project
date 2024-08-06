import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";

// Lazy load the components
const Home = React.lazy(() => import('../Home'));
const About = React.lazy(() => import('../About'));
const Contact = React.lazy(() => import('../Contact'));
const Profile = React.lazy(() => import('../Profile'));
const Settings = React.lazy(() => import('../Settings'));

export default function RouterExampleLazy() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />}>
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}
