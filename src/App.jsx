import "./App.css";
import RoutesPage from "./RoutesPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <RoutesPage />
      <Footer />
    </div>
  );
}

export default App;
