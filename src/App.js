import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Content from './components/Content';
import Posts from './components/Posts';
import Photos from './components/Photos';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/content/posts" element={<Posts />} />
        <Route path="/content/photos" element={<Photos />} />
      </Routes>
    </Router>
  );
}

export default App;