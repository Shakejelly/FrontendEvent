import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideMenuLayout from './pages/sideMenu';
import EventPage from './pages/eventPage';
import UserPage from './pages/userPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<EventPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes >
      </Router >
    </>
  )
}

export default App
