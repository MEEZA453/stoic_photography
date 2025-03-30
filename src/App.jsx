import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Highlight from './pages/highlightbg.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gallary" element={<Home />} />
        <Route path="/" element={<Highlight />} />
      </Routes>
    </Router>
  );
}

export default App;
