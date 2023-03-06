//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Basket from "./pages/Basket";
import ProductPage from "./components/ProductPage";
//react router dom
import {Routes, Route} from 'react-router-dom';
//global styles
import GlobalStyle from "./components/GlobalStyle";

function App() {

  return (
    <div className="App">
      <GlobalStyle />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/basket" element={<Basket />} />          
          <Route path="/ProductPage/:name" element={<ProductPage />} />          
        </Routes>
    </div>
  );
}

export default App;
