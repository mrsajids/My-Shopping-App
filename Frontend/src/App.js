import './App.css';
import Footer from './components/Footer';
import './bootstrap.min.css'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <>
      <main>
        <Header />
        <Container className='main-container'>
          <HomeScreen />
        </Container>
        <Footer />
      </main>
    </>
  );
}

export default App;
