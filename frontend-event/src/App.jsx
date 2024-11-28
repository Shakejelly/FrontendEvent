import './App.css'
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import SideMenuLayout from './pages/sideMenu';
import EventPage from './pages/eventPage';
import UserPage from './pages/userPage';
import SettingsPage from './pages/settingPage';



const buttonsConfig = [ {
    label: "Home",
    className: "bg-red-200 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)] hover:bg-red-200 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white",
  },
  {
    label: "Calender",
    className: "bg-red-200 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)] hover:bg-red-200 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white",
  },
  {
    label: "Saved",
    className: "bg-red-200 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)] hover:bg-red-200 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white",
  },
  
];
function MainLayout() {
  return (
    <div className='main-layout flex'>
      <SideMenuLayout buttons={buttonsConfig} />
      <div className='event-page-container flex-grow p-4'>
      <Outlet />
      </div>
    </div>
  );
}


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route index element={<EventPage />} /> {/* Huvudsida */}
            <Route path="/user" element={<UserPage />} />
            <Route path="/MockMenu" element={<div>Mock Menu Content</div>} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/setting" element={<SettingsPage />}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
