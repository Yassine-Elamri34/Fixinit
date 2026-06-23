import loginBackground from '../../assets/loginBackground.png'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function LoginPage() {


const navigate = useNavigate();


  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "https://api.fixinit.ca:5000/api/Auth/login",
      {
        email,
        password,
      }
    );

    alert(response.data.message);

    localStorage.setItem(
  "userId",
  response.data.userId
);

console.log(response.data.role);

if (response.data.role === "Technician") {
  

  navigate("/technician-dashboard");

}
else if (response.data.role === "BusinessOwner") {

  navigate("/business-dashboard");

}
else if (response.data.role === "Admin") {
  navigate("/admin-dashboard");
}

  } catch (error) {

    alert(error.response.data);

  }
};

  return (
    <main className="min-h-screen flex items-center justify-center px-4 md:px-6 py-10 md:py-20 bg-cover bg-center bg-no-repeat overflow-x-hidden"
    style={{backgroundImage:`url(${loginBackground})`,
  }}>
      
      {/* LOGIN CARD */}

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">


        {/* LEFT SIDE */}

        <div className="bg-[#041B4D] text-white p-6 md:p-10 lg:p-14 flex flex-col justify-center">

          <p className="text-blue-300 font-semibold tracking-widest uppercase mb-4">
            Welcome Back
          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Login To Your
            <br />
            Fixinit Account
          </h1>

          <p className="mt-6 md:mt-8 text-blue-100 leading-7 md:leading-8 text-base md:text-lg max-w-md">
            Access your dashboard, manage service requests, and connect with trusted local IT technicians.
          </p>


          {/* SMALL FEATURES */}

          <div className="mt-10 space-y-4 text-blue-100">

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <p>24/7 Emergency IT Support</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <p>Verified Local Technicians</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <p>Fast Business Assistance</p>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="p-6 md:p-10 lg:p-14 flex flex-col justify-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Sign In
          </h2>

          <p className="text-gray-500 mt-3">
            Enter your account details below.
          </p>


          {/* FORM */}

          <form
  onSubmit={handleSubmit}
  className="mt-10 space-y-6"
>

            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-blue-500"
              />
            </div>


            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
              />
            </div>


            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">

              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>

            </div>


            <button
              type="submit"
              
              className="w-full bg-[#041B4D] text-white py-4 rounded-2xl text-lg font-semibold hover:bg-blue-900 transition"
            >
              Login
            </button>

          </form>


          {/* SIGN UP */}

          <p className="text-gray-600 mt-8 text-center">
            Don’t have an account?
            <span 
            onClick={() => navigate("/sign-up")}
            className="text-blue-600 font-semibold cursor-pointer hover:underline ml-2">
              Create Account
            </span>
          </p>

        </div>

      </div>

    </main>
  )
}
