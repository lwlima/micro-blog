import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/layout/Footer';

import Feed from './components/pages/Feed';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
