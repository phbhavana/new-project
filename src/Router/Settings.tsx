import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Settings</h2>
      <p>Now You can update your settings!</p>
      <button onClick={() => navigate('/profile')}>Back to Profile</button>
    </div>
  );
};
export default Settings;
