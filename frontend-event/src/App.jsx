
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideMenuLayout from './pages/sideMenu';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SideMenuLayout />}>
            <Route path='/MockMenu'></Route >
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
