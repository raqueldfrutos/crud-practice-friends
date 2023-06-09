import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import FriendDetails from "./pages/FriendDetails";
import HomePage from "./pages/HomePage";
import TheShow from "./pages/TheShow";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/theshow" element={<TheShow />} />
        <Route path="/friends/:id" element={<FriendDetails />} />
      </Routes>
    </div>
  );
}

export default App;
