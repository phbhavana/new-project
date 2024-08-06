import { Link, Outlet, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
      <p>Select a user to view their profile:</p>
      <ul>
        <li><Link to="/user/1">User 1</Link></li>
        <li><Link to="/user/2">User 2</Link></li>
        <li><Link to="/user/3">User 3</Link></li>
      </ul>
      </nav>
      <button onClick={()=> navigate('/about')}>Go to About</button>
      <Outlet />
    </div>
  );
}
export default Profile;