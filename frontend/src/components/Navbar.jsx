import { ShieldCheck, Wrench, MapPin, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

function Navbar() {

  return (

    <nav className="w-full h-20 bg-white shadow-md flex items-center justify-between px-12">

      {/* LOGO */}

     <div className="flex items-center gap-3 cursor-pointer">

  <Wrench className="text-blue-600 w-10 h-10" />



  <div>
<Link to="/home">
    <h1 className="text-3xl font-bold text-blue-600">

      Fixinit

    </h1>

    <p className="text-xs text-gray-500 tracking-wide">

      LOCAL IT SUPPORT

    </p>
</Link>
  </div>

</div>

      {/* CENTER LINKS */}

      <ul className="hidden lg:flex items-center gap-6 text-gray-700 font-semibold tracking-wide">

        {/* <li className="cursor-pointer hover:text-blue-600 hover:scale-105 transition">

          <Link to="/home">

    home

  </Link>

        </li> */}

        <li className="cursor-pointer hover:text-blue-600 hover:scale-105 transition">

          Services

        </li>

        <li className="cursor-pointer hover:text-blue-600 hover:scale-105  transition">

          Technicians

        </li>

        <li className="cursor-pointer hover:text-blue-600 hover:scale-105 transition">
<Link to="/get-it-support">

    Get IT Support

  </Link>
         

        </li>

      <li className="cursor-pointer hover:text-blue-600 hover:scale-105 transition">

  <Link to="/become-technician">

    Join as a Technician

  </Link>

</li>
      </ul>



      {/* RIGHT SIDE */}

      <div className="hidden lg:flex items-center gap-5">


        {/* EMERGENCY BUTTON */}

        <button className="bg-red-500 shadow-lg shadow-red-500/30 text-white px-4 py-2 rounded-xl hover:bg-red-600 hover:scale-105  transition font-medium">
<Link to="/emergency">

    

          Emergency Help
  </Link>
        </button>



        {/* LOCATION */}

        <div className="flex items-center gap-3 border border border-gray-200 bg-white  rounded-xl px-4 py-2 hover:border-blue-500 transition">

          <MapPin className="text-blue-600 w-5 h-5" />

          <select className="outline-none bg-transparent text-gray-700 cursor-pointer">

            <option>Toronto</option>

<option>Montreal</option>

<option>Vancouver</option>



<option>Ottawa</option>

<option>Edmonton</option>

<option>Mississauga</option>

<option>Winnipeg</option>

<option>Quebec City</option>

<option>Hamilton</option>

          </select>

        </div>



        {/* AUTH BUTTONS */}

        <div className="flex gap-3">
<Link to="/login"> 
          <button className="px-5 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 hover:scale-105  transition">

            Log In

          </button>
</Link>


          <button className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 hover:scale-105  transition">

            Sign Up

          </button>

        </div>

      </div>
<button className="lg:hidden">

  <Menu className="w-8 h-8 text-blue-600" />

</button>
    </nav>

  )

}

export default Navbar