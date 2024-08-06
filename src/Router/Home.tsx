import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the Home page!</p>
      <button onClick={() => navigate('/login')}>Go to Login</button>
    </div>
  );
};
export default Home;