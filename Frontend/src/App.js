import './App.css';
import Footer from './components/Footer';
// import './bootstrap.min.css'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './screens/ProductDetails';
import CartSc from './screens/CartSc';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import 'react-toastify/dist/ReactToastify.css';
import ProfileDetail from './screens/ProfileDetail';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import Dashboard from './screens/Admin/Dashboard';

function App() {
  return (
    <>
      <main>
        <Header />
        <div className='main-container'>
          <Routes>
            <Route path='/' Component={HomeScreen} exact />
            <Route path='/product/:id' Component={ProductDetails} />
            <Route path="/placeorder" Component={PlaceOrderScreen} />
            <Route path='/cart/:id?' Component={CartSc} />
            <Route path='/login' Component={LoginScreen} />
            <Route path="/register" Component={RegisterScreen} />
            <Route path="/profile" Component={ProfileDetail} />
            <Route path="/shipping" Component={ShippingScreen} />
            <Route path="/payment" Component={PaymentScreen} />
            <Route path="/order/:id" Component={OrderScreen} />
            <Route path="/admin/*" Component={Dashboard} />
          </Routes>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
