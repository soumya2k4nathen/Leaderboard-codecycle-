import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Leader from "@/page/Leader";


function App() {
  

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Leader />} />
      </Routes>
      </Router>  
    </>
  )
}

export default App
