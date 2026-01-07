import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App({ site }) {
  return (

    <Router>
      <Layout site={site}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </Layout>
    </Router>

  );
}

export default App;
