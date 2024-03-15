import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Nevbar from './components/Nevbar/Nevbar';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <BrowserRouter >
        <Nevbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </BrowserRouter >
  );
}

export default App;
