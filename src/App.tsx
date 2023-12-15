import { ArtistProvider } from "./context/ArtistContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import ArtistDetailsPage from "./pages/ArtistDetailsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ArtistProvider>
      <BaseLayout>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/artist/:id/:index" element={<ArtistDetailsPage />} />
          </Routes>
        </Router>
      </BaseLayout>
    </ArtistProvider>
  );
}

export default App;
