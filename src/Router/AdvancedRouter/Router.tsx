import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";

const Home: any = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the Home page!</p>
    </div>
  );
};

const About: any = () => {
  return (
    <div>
      <h2>About</h2>
      <p>Learn more about us on this page.</p>
    </div>
  );
};

const Contact: any = () => {
  return (
    <div>
      <h2>Contact</h2>
      <p>Get in touch with us!</p>
    </div>
  );
};
const Profile: any = () => {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <ul>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
const Settings: any = () => {
  return (
    <div>
      <h2>Settings</h2>
      <p>Now You can update your settings!</p>
    </div>
  );
};
export default function RouterExample() {
  return (
    <Router>
      <div>
        <div>
          <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
