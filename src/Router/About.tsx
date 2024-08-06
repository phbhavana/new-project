import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>About</h2>
      <p>Learn more about us on this page.</p>
      <button onClick={() => navigate('/contact')}>Go to Contact</button>
    </div>
  );
};
export default About;
