import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import AppsPage from './pages/AppsPage';
import IconSticker from './components/IconSticker';

function App() {
  return (
    <div className="App">
      <IconSticker />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/contact' element={<ContactUsPage />} />
        <Route path='/apps' element={<AppsPage />} />
      </Routes>
    </div>
  );
}

export default App;
