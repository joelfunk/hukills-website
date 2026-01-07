import './App.css';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Plumbing from './pages/plumbing/Plumbing';
import WaterHeaters from './pages/plumbing/WaterHeaters';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App({ site }) {
  return (

    <Router>
      <ScrollToTop />
      <Layout site={site}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plumbing" element={<Plumbing />} />
          <Route path="/plumbing/water-heaters" element={<WaterHeaters />} />
        </Routes>
      </Layout>
    </Router>

  );
}

export default App;
