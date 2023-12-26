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

function App() {
  return (
    <>
      <main>
        <Header />
        <Container className='main-container my-4'>
          <Routes>
            <Route path='/' Component={HomeScreen} exact/>
            <Route path='/product/:id' Component={ProductDetails} />
            <Route path='/cart/:id?' Component={CartSc} />
            <Route path='/login' Component={LoginScreen} />
            <Route path="/register" Component={RegisterScreen} />
          </Routes>
        </Container>
        <Footer />
      </main>
    </>
  );
}

export default App;
