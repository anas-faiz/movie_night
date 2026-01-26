import { Routes,Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import BrowsePage from "./Pages/BrowsePage";
import NotFound from "./Pages/NotFound";

function App (){
  return (
    <Routes>  
      <Route path="/" element={<HomePage/>}/>            
      <Route path="/auth" element={<LoginPage/>} />
      <Route path="/browse" element={<BrowsePage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App;