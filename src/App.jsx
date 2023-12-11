import { Route, Routes } from "react-router-dom";
import Employee from "./pages/Employee";
import Homepage from "./pages/Homepage"


function App() {
  
  return (
          <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/employee/:first_name" element={<Employee />} />
          </Routes>
   
  );
}

export default App;
