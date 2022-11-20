import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import OrderList from './pages/orderList';
import Order from './pages/order';

function App() {
  return (
    <div className="App m-5">
        <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/order" element={<Order />}/>
          <Route path="/order-list" element={<OrderList />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
