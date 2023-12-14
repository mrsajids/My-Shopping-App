import './App.css';
import Footer from './components/Footer';
// import './bootstrap.min.css'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <main>
        <Header />
        <Container className='main-container my-4'>
          <Routes>
            <Route path='/' Component={HomeScreen} />
          </Routes>
        </Container>
        <Footer />
      </main>
    </>
  );
}

export default App;
