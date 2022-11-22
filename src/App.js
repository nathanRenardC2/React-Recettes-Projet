import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageRecettes from './components/Recettes/PageRecettes';
import PageBlog from './components/Blog/PageBlog';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<PageRecettes />} />
          <Route path="/blogs" element={<PageBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
