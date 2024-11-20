import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import SideMenuLayout from "./pages/SideMenu";
import EventPage from "./pages/eventPage";
import UserPage from "./pages/UserPage";
import Filter from "./components/FilterPopup";
import FriendsAll from "./components/FriendsAll";
import EditProfile from "./components/EditProfile";
import Login from './pages/Login'
import LandingPage from './pages/landingPage'
import { Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";




const buttonsConfig = [
  {
    label: "Home",
    className:
      "bg-Flesh shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)] hover:bg-red-200 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white",
  },
  {
    label: "Calender",
    className:
      "bg-Flesh shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)] hover:bg-red-200 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white",
  },
  {
    label: "Saved",
    className:
      "bg-Flesh shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)] hover:bg-red-200 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white",
  },
];
function MainLayout() {
  return (
    <div className="main-layout">
      <SideMenuLayout buttons={buttonsConfig} />
      <div className="event-page-container flex-grow-1 h-0 overflow-auto"></div>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<LandingPage />}></Route>
          <Route path="/" element={<MainLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/MockMenu" element={<div>Mock Menu Content</div>} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/allfriends" element={<FriendsAll />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
