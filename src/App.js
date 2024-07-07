import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import Home from './components/home/Home';
import Shop from './components/Shop/Shop'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Bag from './components/bag/Bag';
import './App.css';
import Order from './components/order/Order';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />}/>
          <Route path='shop' element={<Shop />}/>
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />} />
          <Route path='bag' element={<Bag />}/>
          <Route path='order' element={<Order />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
