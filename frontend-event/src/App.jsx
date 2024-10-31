import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideMenuLayout from './pages/sideMenu';
import EventPage from './pages/eventPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<EventPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
