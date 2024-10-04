// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainAPortal from './pages/MainAPortal';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/florainndotheavens-adminpage" element={<MainAPortal />} />
    </Routes>
  );
}

export default App;
