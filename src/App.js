import React from "react";
// import Navbar1 from "./components/jiran360/navbar1";
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from "./routes/allroutes";


function App() {

  return (
   <BrowserRouter>
   <AllRoutes/>
   {/* <Navbar1/>  */}
   </BrowserRouter>
  );
}

export default App;
