import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Explore, Offers, SignIn, SignUp, ForgotPassword } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/profile" element={<SignIn />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;