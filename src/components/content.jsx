import { Routes,Route } from "react-router-dom"
import WelcomePage from "../pages/welcomePage"
import LoginPage from "../pages/loginpage.jsx"
import SignupPage from "../pages/signuppage.jsx"

function Content() {
  return (
    <Routes>
        <Route path="/" element={<WelcomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
    </Routes>
  )
}

export default Content
