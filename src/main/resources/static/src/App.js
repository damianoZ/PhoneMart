
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';
import Contact from './components/Contact';
import About from './components/About';
import Compare from './components/Compare';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Product/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
      <Route path="/compare" element={<Compare/>}/> 
      <Route path="/about" element={<About/>}/> 
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
