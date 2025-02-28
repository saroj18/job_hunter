import { Routes, Route } from "react-router";
import LandingPage from "./pages/landing-page";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";

import MainLayout from "./components/layout/main-layout";
import ResumeBuilder from "./pages/resume-builder";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/resume" element={<ResumeBuilder />} />
      </Route>
    </Routes>
  );
}

export default App;
