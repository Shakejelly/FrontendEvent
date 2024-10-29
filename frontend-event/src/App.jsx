import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideMenuLayout from './pages/sideMenu';


const buttonsConfig = [
  {

    label: "Home",
    className: "bg-red-200 shadow-md hover:bg-red-200 hover:shadow-inner text-white",

  },
  {

    label: "Calender",
    className: "bg-red-200 shadow-md hover:bg-red-200 hover:shadow-inner text-white",

  },
  {

    label: "Saved",
    className: "bg-red-200 shadow-md hover:bg-red-200 hover:shadow-inner text-white",

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
