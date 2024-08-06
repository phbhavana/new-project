import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Contact</h2>
      <p>Get in touch with us!</p>
      <button onClick={() => navigate('/Login')}>Go to Login</button>
    </div>
  );
};
export default Contact;