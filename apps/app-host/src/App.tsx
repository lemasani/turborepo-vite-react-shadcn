import "@repo/ui/styles/globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/login";
import Module1 from "./pages/module1";
import Module2 from "./pages/module2";
import Module3 from "./pages/module3";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login route without RootLayout */}
        <Route path="/login" element={<Login />} />
         {/* All other routes with RootLayout */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="module1" element={<Module1 />} />
          <Route path="module2" element={<Module2 />} />
          <Route path="module3" element={<Module3 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;