import styles from "./App.module.css";
import ChampionPage from "./Pages/ChampionPage";
import UserPage from "./Pages/UserPage";
import MainNavigation from "./Pages/MainNavigation";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.background}>
      <MainNavigation />
      <Routes>
        <Route path="/LoLWebPage" element={<ChampionPage />} />
        <Route path="/user-page" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
