import { Routes, Route } from "react-router";
import LandingPage from "./pages/landing-page";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
