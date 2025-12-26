import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Loans from './pages/Loans';
import Membership from './pages/Membership';
import Downloads from './pages/Downloads';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="loans" element={<Loans />} />
            <Route path="membership" element={<Membership />} />
            <Route path="downloads" element={<Downloads />} />
            <Route path="news" element={<News />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
      <SpeedInsights />
    </>
  );
}

export default App;
