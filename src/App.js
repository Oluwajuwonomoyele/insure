import './scss/main.scss';
import Home from './pages/home/home'
import Navbar from './components/navbar';
import Footer from './components/footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <> 
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
