import { Routes, Route } from "react-router-dom";
import { Home, CreateItem, Navbar } from "./index";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-item" element={<CreateItem />} />
      </Routes>
    </div>
  );
}

export default App;
