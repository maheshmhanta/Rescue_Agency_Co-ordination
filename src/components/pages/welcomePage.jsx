import {NavLink } from "react-router-dom";
import LoginPage from "./loginpage";
import SignupPage from "./signuppage";

function WelcomePage() {
  return (
    <div>
      <div>Hello From Rescue Rangers Website</div>
      <div>
        <NavLink to="/login" element={<LoginPage />}>
          Login
        </NavLink>
        <NavLink to="/signup" element={<SignupPage />}>
          Login as a Agenncy
        </NavLink>
      </div>
    </div>
  );
}

export default WelcomePage;
