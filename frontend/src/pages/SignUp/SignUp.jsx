import {useState} from'react'
import axios from 'axios'

import loginBackground from '../../assets/loginBackground.png'
import { useNavigate } from "react-router-dom";


export default function SignUp() {

const navigate = useNavigate();
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [role, setRole] = useState('')


const handleSubmit = async (e) => {
  e.preventDefault()
  //stop the page from refreshing
try {
  const response = await axios.post(
    'https://api.fixinit.ca/api/Auth/register',
    {
      name,
      email,
      password,
      role
    }
  )
  console.log(response.data)
  alert('Account created successfully')
} catch (error) {
  console.log(error);

  alert(
    error.response?.data || "Something went wrong"
  );
}
}







  return (

    <main
      className="min-h-screen flex items-center justify-center px-4 md:px-6 py-10 md:py-20 bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{
        backgroundImage: `url(${loginBackground})`,
      }}
    >

      {/* SIGN UP CARD */}

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">


        {/* LEFT SIDE */}

        <div className="bg-[#041B4D] text-white p-6 md:p-10 lg:p-14 flex flex-col justify-center">

          <p className="text-blue-300 font-semibold tracking-widest uppercase mb-4">

            Join Fixinit

          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">

            Create Your
            <br />
            Fixinit Account

          </h1>

          <p className="mt-6 md:mt-8 text-blue-100 leading-7 md:leading-8 text-base md:text-lg max-w-md">

            Join our platform to connect with trusted IT technicians and manage your service requests easily .

          </p>


          {/* FEATURES */}

          <div className="mt-10 space-y-4 text-blue-100">

            <div className="flex items-center gap-3">

              <div className="w-3 h-3 bg-green-400 rounded-full"></div>

              <p>Fast IT Support</p>

            </div>

            <div className="flex items-center gap-3">

              <div className="w-3 h-3 bg-green-400 rounded-full"></div>

              <p>Verified Technicians</p>

            </div>

            <div className="flex items-center gap-3">

              <div className="w-3 h-3 bg-green-400 rounded-full"></div>

              <p>Emergency Assistance</p>

            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="p-6 md:p-10 lg:p-14 flex flex-col justify-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">

            Sign Up

          </h2>

          <p className="text-gray-500 mt-3">

            Create your account below

          </p>


          {/* FORM */}

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">


            {/* FULL NAME */}

            <div>

              <label className="block text-gray-700 font-medium mb-3">

                Full Name

              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-2xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

            </div>


            {/* EMAIL */}

            <div>

              <label className="block text-gray-700 font-medium mb-3">

                Email Address

              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>


            {/* ROLE */}

            <div>

              <label className="block text-gray-700 font-medium mb-3">

                Account Type

              </label>

              <select className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-500" value={role}
  onChange={(e) => setRole(e.target.value)}>

                <option value="">Select account type</option>

                <option value="BusinessOwner">Business Owner</option>

                <option value="Technician">Technician</option>

              </select>

            </div>


            {/* PASSWORD */}

            <div>

              <label className="block text-gray-700 font-medium mb-3">

                Password

              </label>

             <input
  type="password"
  placeholder="Create a password"
  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

            </div>


            {/* CONFIRM PASSWORD */}

            <div>

              <label className="block text-gray-700 font-medium mb-3">

                Confirm Password

              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
              />

            </div>


            {/* BUTTON */}

            <button
              type="submit"
              className="w-full bg-[#041B4D] text-white py-3 md:py-4 rounded-2xl text-base md:text-lg font-semibold hover:bg-blue-900 transition"
            >

              Create Account

            </button>

          </form>


          {/* LOGIN */}

          <p className="text-gray-600 mt-8 text-center">

            Already have an account?
            <span 
            onClick={() => navigate("/login")}
            className="text-blue-600 font-semibold cursor-pointer hover:underline ml-2">

              Sign In

            </span>

          </p>

        </div>

      </div>

    </main>

  )

}