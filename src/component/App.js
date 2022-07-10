import { Routes, Route } from "react-router-dom";
import { Dashboard, Home, CreateItem, Navbar } from "./index";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-item" element={<CreateItem />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
