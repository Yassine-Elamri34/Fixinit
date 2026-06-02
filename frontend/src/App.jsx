import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'
import BecomeTechnician from './pages/Technician/BecomeTechnician'
import GetItSupport from './pages/business/GetItSupport'
import Emergency from './pages/Emergency/Emergency'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import TechnicianDashboard from './pages/Technician/TechnicianDashboard'
import BusinessDashboard from './pages/Business/BusinessDashboard'
import AdminDashboard from './pages/Admin/Admin'
import TechnicianProfile from './pages/Technician/TechnicianProfile'
import TechnicianSchedule from './pages/Technician/TechnicianSchedule'
import BusinessProfile from "./pages/Business/BusinessProfile";
import Technician from "./pages/Business/Technician";
import Payment from './pages/Payment/Payment'
import { Routes, Route , useLocation } from 'react-router-dom'
function App() {

const location = useLocation()
const hideLayout =location.pathname === '/technician-dashboard' || location.pathname === '/business-dashboard'|| location.pathname === '/admin-dashboard'|| location.pathname === '/technician-profile' || location.pathname === '/technician-schedule' || location.pathname === '/business-profile' || location.pathname === '/technician'|| location.pathname === '/admin-dashboard'|| location.pathname === '/technician-profile' || location.pathname === '/technician-schedule' || location.pathname === '/business-profile' || location.pathname === '/technician' || location.pathname === '/emergency'



  return (

    <div className="min-h-screen flex flex-col">

      {!hideLayout && <Navbar />}



      {/* PAGE CONTENT */}

      <main className="flex-grow">
      <Routes>

  <Route path="/" element={<Home />} />
  <Route path="/become-technician" element={<BecomeTechnician />} />
  <Route path="/get-it-support" element={<GetItSupport />} />
  <Route path="/emergency" element={<Emergency />}/>
  <Route path="/login" element={<Login />}/>
  <Route path="sign-up" element={<SignUp /> }/>
  <Route path="/technician-dashboard" element={<TechnicianDashboard/>}/>
  <Route path="/business-dashboard" element={<BusinessDashboard/>}/>
  <Route path="/admin-dashboard" element={<AdminDashboard />} />
  <Route path="/technician-profile" element={<TechnicianProfile />} />
   <Route path="/technician-schedule" element={<TechnicianSchedule />} />
   <Route path="/business-profile" element={<BusinessProfile />} />
   <Route path="/technician" element={<Technician />} />
   <Route path="/payment" element={<Payment />} />

</Routes>
      </main>
      
     {!hideLayout && <Chatbot /> }


     {!hideLayout && <Footer />}

    </div>

  )

}

export default App