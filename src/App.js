import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MyListPage from "./pages/MyListPage";
import SettingsPage from "./pages/SettingsPage";
import PopularPage from "./pages/PopularPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mylist" element={<MyListPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/popular" element={<PopularPage />} />
      </Routes>
    </div>
  );
}

export default App;
