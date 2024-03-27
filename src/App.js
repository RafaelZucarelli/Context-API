
import './App.css';

//1- config react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//components
import NavBar from './components/NavBar';

//pages
import Home from './pages/Home';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/page1" element={<Home />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
