import {
  LayoutDashboard,
  ClipboardList,
  CalendarDays,
  User,
  LogOut,
  Bell,
  Monitor,
  Wifi,
  Printer,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";

function TechnicianDashboard() {

  const navigate = useNavigate();

  const [technician, setTechnician] = useState(null);

  useEffect(() => {

    const fetchTechnician = async () => {

      try {

        const response = await axios.get(
          "https://localhost:7294/api/Technician/profile/1"
        );

        setTechnician(response.data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchTechnician();

  }, []);


  return (

    <main className="min-h-screen bg-gray-100 flex">

      {/* SIDEBAR */}

      <aside className="w-72 bg-white shadow-lg p-8 flex flex-col justify-between">

        <div>

          {/* LOGO */}

          <div className="mb-14">

            <h1 className="text-4xl font-bold text-blue-700">
              Fixinit
            </h1>

            <p className="text-gray-500 mt-2">
              Technician Panel
            </p>

          </div>


          {/* MENU */}

          <div className="space-y-5">

            <div className="flex items-center gap-4 bg-blue-50 text-blue-700 p-4 rounded-2xl cursor-pointer">
              <LayoutDashboard />
              <p className="font-semibold">Dashboard</p>
            </div>

            <div className="flex items-center gap-4 text-gray-700 p-4 rounded-2xl hover:bg-gray-100 cursor-pointer transition">
              <ClipboardList />
              <p>Available Requests</p>
            </div>

           <div
  onClick={() => navigate("/technician-schedule")}
  className="flex items-center gap-4 text-gray-700 p-4 rounded-2xl hover:bg-gray-100 cursor-pointer transition"
>
  <CalendarDays />
  <p>Schedule</p>
</div>

            <div
              onClick={() => navigate("/technician-profile")}
              className="flex items-center gap-4 text-gray-700 p-4 rounded-2xl hover:bg-gray-100 cursor-pointer transition"
            >
              <User />
              <p>Profile</p>
            </div>

          </div>

        </div>


        {/* LOGOUT */}

        <div
          onClick={() => navigate("/login")}
          className="flex items-center gap-4 text-red-500 p-4 rounded-2xl hover:bg-red-50 cursor-pointer transition"
        >
          <LogOut />
          <p>Logout</p>
        </div>

      </aside>


      {/* MAIN CONTENT */}

      <section className="flex-1 p-10">


        {/* TOP BAR */}

        <div className="flex items-center justify-between mb-10">

          <h1 className="text-4xl font-bold text-gray-900">
            Technician Dashboard
          </h1>

          <div className="flex items-center gap-5">

            <Bell className="w-7 h-7 text-gray-700 cursor-pointer" />

            <div className="w-14 h-14 rounded-full bg-gray-300"></div>

          </div>

        </div>


        {/* TOP CARDS */}

        <div className="grid grid-cols-2 gap-8 mb-8">


          {/* PROFILE CARD */}

          <div className="bg-white rounded-3xl shadow-md p-8 flex items-center justify-between">

            <div className="flex items-center gap-6">

              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
  {technician?.profilePicture ? (
    <img
      src={`https://localhost:7294${technician.profilePicture}`}
      alt="Profile"
      className="w-full h-full object-cover"
    />
  ) : null}
</div>

              <div>

                <p className="text-gray-500">
                  Welcome back,
                </p>

               <h2 className="text-3xl font-bold text-gray-900 mt-1">
  {technician?.firstName} {technician?.lastName}
</h2>

               <p className="text-gray-600 mt-2">
  {technician?.city}, {technician?.region}
</p>


              </div>

            </div>

          </div>


          {/* AVAILABILITY */}

          <div className="bg-white rounded-3xl shadow-md p-8 flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold text-gray-900">
                Availability
              </h2>

              <p
                className={`font-semibold mt-3 ${
                  technician?.isAvailable
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {technician?.isAvailable
                  ? "Available Now"
                  : "Unavailable"}
              </p>

              <p className="text-gray-500 mt-2">
                {technician?.isAvailable
                  ? "You are visible to receive new requests"
                  : "You are currently hidden from requests"}
              </p>

            </div>

            <div
              className={`w-16 h-9 rounded-full ${
                technician?.isAvailable
                  ? "bg-green-500"
                  : "bg-gray-400"
              }`}
            ></div>

          </div>

        </div>


        {/* MIDDLE SECTION */}

        <div className="grid grid-cols-3 gap-8">


          {/* ACTIVE REQUESTS */}

          <div className="col-span-2 bg-white rounded-3xl shadow-md p-8">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-2xl font-bold text-gray-900">
                Active Requests
              </h2>

              <p className="text-blue-600 cursor-pointer">
                View all
              </p>

            </div>


            {/* REQUEST 1 */}

            <div className="flex items-center justify-between border-b pb-6 mb-6">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <Monitor />
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    POS System Down
                  </h3>

                  <p className="text-gray-500">
                    Pizza Place Restaurant
                  </p>

                  <p className="text-gray-400 text-sm mt-1">
                    Toronto, ON
                  </p>

                </div>

              </div>

              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                Accept
              </button>

            </div>


            {/* REQUEST 2 */}

            <div className="flex items-center justify-between border-b pb-6 mb-6">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <Wifi />
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Network Setup
                  </h3>

                  <p className="text-gray-500">
                    Central Hotel
                  </p>

                  <p className="text-gray-400 text-sm mt-1">
                    Toronto, ON
                  </p>

                </div>

              </div>

              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                Accept
              </button>

            </div>


            {/* REQUEST 3 */}

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <Printer />
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Printer Issue
                  </h3>

                  <p className="text-gray-500">
                    Office Hub
                  </p>

                  <p className="text-gray-400 text-sm mt-1">
                    Toronto, ON
                  </p>

                </div>

              </div>

              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                Accept
              </button>

            </div>

          </div>


          {/* RIGHT SECTION */}

          <div className="space-y-8">


            {/* SCHEDULE */}

            <div className="bg-white rounded-3xl shadow-md p-8">

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Today's Schedule
              </h2>

              <div className="space-y-6">

                <div>

                  <p className="font-bold">
                    10:00 AM
                  </p>

                  <p className="text-gray-600 mt-1">
                    Restaurant POS Installation
                  </p>

                </div>

                <div>

                  <p className="font-bold">
                    01:00 PM
                  </p>

                  <p className="text-gray-600 mt-1">
                    Network Setup
                  </p>

                </div>

              </div>

            </div>


            {/* EARNINGS */}

            <div className="bg-white rounded-3xl shadow-md p-8">

              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Earnings This Week
              </h2>

              <h1 className="text-5xl font-bold text-blue-700">
                ${technician?.hourlyRate || 0}
              </h1>

            </div>

          </div>

        </div>

      </section>

    </main>

  );

}

export default TechnicianDashboard;