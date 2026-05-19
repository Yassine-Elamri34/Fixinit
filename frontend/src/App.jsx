import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'
import BecomeTechnician from './pages/Technician/BecomeTechnician'
import GetItSupport from './pages/business/GetItSupport'
import Emergency from './pages/Emergency/Emergency'
import Login from './pages/Login/Login'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (

    <div className="min-h-screen flex flex-col">

      <Navbar />



      {/* PAGE CONTENT */}

      <main className="flex-grow">
      <Routes>

  <Route path="/home" element={<Home />} />
  <Route path="/become-technician" element={<BecomeTechnician />} />
  <Route path="/get-it-support" element={<GetItSupport />} />
  <Route path="/emergency" element={<Emergency />}/>
  <Route path="/login" element={<Login />}/>

</Routes>
      </main>
      <Chatbot />



      <Footer />

    </div>

  )

}

export default App