import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Reserva from "./components/Reserva/Reserva";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Reserva />
      <Footer />
    </div>
  );
}

export default App;
