import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideMenuLayout from './pages/sideMenu';


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
    className: "bg-red-200 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)]  hover:bg-red-200 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white",
  },
]


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SideMenuLayout buttons={buttonsConfig}/>}>
            <Route path='/MockMenu' element={<div>Mock Menu Content</div>}></Route >
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
