import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideMenuLayout from './pages/sideMenu';
import EventPage from './pages/eventPage';




const buttonsConfig = [
  {
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
  {
    label: "Sport",
    className: "bg-red-200 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)] hover:bg-red-200 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white",
  },
  {
    label: "Music",
    className: "bg-red-200 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)] hover:bg-red-200 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white",
  },
];
function MainLayout() {
  return (
    <div className='main-layout'>
      <SideMenuLayout buttons={buttonsConfig} />
      <div className='event-page-container flex-grow-1 h-0 overflow-auto'></div>
      <EventPage />
    </div>
  );
}


function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/MockMenu" element={<div>Mock Menu Content</div>} />


        </Routes>
      </Router>
    </>
  )
}

export default App
