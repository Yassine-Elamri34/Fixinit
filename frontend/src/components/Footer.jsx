import { Globe, MapPin, Wrench, Shield, Apple , Play } from 'lucide-react'
import apple from '../assets/apple.svg'
import googlePlay from '../assets/googlePlay.svg'


function Footer() {

  return (

    <footer className="bg-[#041B4D] text-white px-16 py-14">


      {/* TOP AREA */}

      <div className="flex justify-between">


        {/* LEFT SECTION */}

        <div>

          <h1 className="text-4xl font-bold mb-6">

            Fixinit

          </h1>

          <p className="text-gray-300 leading-8 max-w-[280px]">

            Connecting you with trusted local IT professionals
            for all your tech needs.

          </p>
          <p className="text-red-400 font-medium mt-4">

  24/7 Emergency IT Assistance

</p>



          {/* SOCIAL ICONS */}

<div className="flex gap-5 mt-8">

  <Globe className="cursor-pointer hover:text-blue-400 hover:scale-105  transition" />

  <MapPin className="cursor-pointer hover:text-red-400  hover:scale-105 transition" />

  <Wrench className="cursor-pointer hover:text-yellow-400 hover:scale-105 transition" />

  <Shield className="cursor-pointer hover:text-green-400 hover:scale-105 transition" />

</div>

        </div>



        {/* QUICK LINKS */}

        <div>

          <h2 className="text-xl font-semibold mb-6">

            Quick Links

          </h2>

          <ul className="space-y-3 text-gray-300">

            <li className="hover:text-white cursor-pointer hover:scale-105 transition">

              Home

            </li>

            <li className="hover:text-white cursor-pointer hover:scale-105 transition">

              Services

            </li>

            <li className="hover:text-white cursor-pointer hover:scale-105 transition">

              Technicians

            </li>

            <li className="hover:text-white cursor-pointer hover:scale-105 transition">

              For Businesses

            </li>

            <li className="hover:text-white cursor-pointer hover:scale-105 transition">

              Become a Technician

            </li>

          </ul>

        </div>



        {/* SUPPORT */}

        <div>

          <h2 className="text-xl font-semibold mb-6">

            Support

          </h2>

          <ul className="space-y-3 text-gray-300">

            <li className="hover:text-white cursor-pointer hover:scale-105 transition">

              Help Center

            </li>

            <li className="hover:text-white cursor-pointer hover:scale-105 transition">

              How It Works

            </li>

            <li className="hover:text-white cursor-pointer hover:scale-105 transition">

              Safety & Security

            </li>

            <li className="hover:text-white cursor-pointer hover:scale-105 transition">

              Terms Of Service

            </li>

            <li className="hover:text-white cursor-pointer hover:scale-105 transition">

              Privacy Policy

            </li>

          </ul>

        </div>



        {/* COMPANY */}

        <div>

          <h2 className="text-xl font-semibold mb-6">

            Company

          </h2>

          <ul className="space-y-3 text-gray-300">

            <li className="hover:text-white cursor-pointer hover:scale-105 transition">

              About Us

            </li>

            <li className="hover:text-white cursor-pointer hover:scale-105 transition">

              Careers

            </li>

            <li className="hover:text-white cursor-pointer hover:scale-105 transition">

              Blog

            </li>

            <li className="hover:text-white cursor-pointer hover:scale-105 transition">

              Contact Us

            </li>

          </ul>

        </div>



        {/* APP SECTION */}

       <div>

  <h2 className="text-xl font-semibold mb-6">

    Get the App

  </h2>



  {/* APP BADGES */}

  <div className="flex flex-col gap-4">

    <img
      src={apple}
      alt="App Store"
      className="w-44 cursor-pointer hover:scale-105 transition"
    />



    <img
      src={googlePlay}
      alt="Google Play"
      className="w-44 cursor-pointer hover:scale-105 transition"
    />

  </div>
  </div>

      </div>



      {/* BOTTOM COPYRIGHT */}

      <div className="border-t border-gray-700 mt-14 pt-8 text-center text-gray-400">

        © 2026 Fixinit. All rights reserved.

      </div>

    </footer>

  )

}

export default Footer