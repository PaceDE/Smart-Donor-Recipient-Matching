import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Home from './pages/Home';
import SidebarLayout from './component/SidebarLayout';
import Request from './pages/Request';
import Donate from './pages/Donate';
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />

        {/* Private Routes with Sidebar */}
        <Route path="/home" element={<SidebarLayout />}>
          
          <Route index path="" element={<Home />} />
          <Route path="request" element={<Request/>}/>
          <Route path="donate" element={<Donate/>}/>
          <Route path="about" element={<AboutUs/>}/>
          <Route path="profile" element={<Profile />} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
