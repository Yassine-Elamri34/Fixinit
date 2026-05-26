import {
  LayoutDashboard,
  ClipboardList,
  CalendarDays,
  MessageSquare,
  Wallet,
  User,
  Settings,
  LogOut,
  Bell,
  Monitor,
  Wifi,
  Printer,
} from 'lucide-react'

import { useNavigate } from "react-router-dom";


function TechnicianDashboard() {

const navigate = useNavigate();


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
              <p>Requests</p>
            </div>

            <div className="flex items-center gap-4 text-gray-700 p-4 rounded-2xl hover:bg-gray-100 cursor-pointer transition">
              <CalendarDays />
              <p>Schedule</p>
            </div>

            {/* <div className="flex items-center gap-4 text-gray-700 p-4 rounded-2xl hover:bg-gray-100 cursor-pointer transition">
              <MessageSquare />
              <p>Messages</p>
            </div> */}

            {/* <div className="flex items-center gap-4 text-gray-700 p-4 rounded-2xl hover:bg-gray-100 cursor-pointer transition">
              <Wallet />
              <p>Earnings</p>
            </div> */}

            <div className="flex items-center gap-4 text-gray-700 p-4 rounded-2xl hover:bg-gray-100 cursor-pointer transition">
              <User />
              <p>Profile</p>
            </div>

            {/* <div className="flex items-center gap-4 text-gray-700 p-4 rounded-2xl hover:bg-gray-100 cursor-pointer transition">
              <Settings />
              <p>Settings</p>
            </div>
            <div className="flex items-center gap-4 text-gray-700 p-4 rounded-2xl hover:bg-gray-100 cursor-pointer transition">
              <Settings />
              <p>more option </p>
            </div> */}

          </div>

        </div>


        {/* LOGOUT */}

        <div
  onClick={() => navigate("/home")}
  className="flex items-center gap-4 text-red-500 p-4 rounded-2xl hover:bg-red-50 cursor-pointer transition"
>
  <LogOut />
  <p>Logout</p>
</div>

      </aside>
{/* THE ASIDE IS DONE HERE  */}

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

              <div className="w-24 h-24 rounded-full bg-gray-200"></div>

              <div>

                <p className="text-gray-500">
                  Welcome back,
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-1">
                  Ahmed Ben Ali
                </h2>

                <p className="text-gray-600 mt-2">
                  Network Specialist
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

              <p className="text-green-600 font-semibold mt-3">
                Available Now
              </p>

              <p className="text-gray-500 mt-2">
                You are visible to receive new requests
              </p>

            </div>

            <div className="w-16 h-9 bg-black rounded-full"></div>

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
                $480
              </h1>

            </div>

          </div>

        </div>


        {/* NOTIFICATIONS */}

        <div className="bg-white rounded-3xl shadow-md p-8 mt-8">

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent Notifications
          </h2>

          <div className="space-y-5 text-gray-600">

            <p>
              • New emergency request near your location
            </p>

            <p>
              • Request accepted: Network Setup
            </p>

            <p>
              • Payment received for completed service
            </p>

          </div>

        </div>

      </section>

    </main>

  )

}

export default TechnicianDashboard