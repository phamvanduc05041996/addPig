import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Page/About';
import Contact from './Page/Contact';
import Home from './Page/Home';
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
