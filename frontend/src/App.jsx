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
import { Routes, Route , useLocation } from 'react-router-dom'
function App() {

const location = useLocation()
const hideLayout =location.pathname === '/technician-dashboard' || location.pathname === '/business-dashboard'



  return (

    <div className="min-h-screen flex flex-col">

      {!hideLayout && <Navbar />}



      {/* PAGE CONTENT */}

      <main className="flex-grow">
      <Routes>

  <Route path="/home" element={<Home />} />
  <Route path="/become-technician" element={<BecomeTechnician />} />
  <Route path="/get-it-support" element={<GetItSupport />} />
  <Route path="/emergency" element={<Emergency />}/>
  <Route path="/login" element={<Login />}/>
  <Route path="sign-up" element={<SignUp /> }/>
  <Route path="/technician-dashboard" element={<TechnicianDashboard/>}/>
  <Route path="/business-dashboard" element={<BusinessDashboard/>}/>

</Routes>
      </main>
      <Chatbot />



     {!hideLayout && <Footer />}

    </div>

  )

}

export default App