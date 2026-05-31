import {
  LayoutDashboard,
  ClipboardList,
  Users,
  AlertTriangle,
  User,
  LogOut,
  Monitor,
  Wifi,
  Printer,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function BusinessDashboard() {

  const navigate = useNavigate();

  return (

    <main className="min-h-screen bg-gray-100 flex">

      {/* SIDEBAR */}

      <aside className="w-72 bg-white border-r border-gray-300 p-8 flex flex-col justify-between">

        <div>

          {/* LOGO */}

          <div className="mb-14">

            <h1 className="text-4xl font-bold text-green-700">
              Fixinit
            </h1>

            <p className="text-gray-500 mt-2">
              Business Panel
            </p>

          </div>


          {/* MENU */}

          <div className="space-y-5">

            <div className="flex items-center gap-4 bg-green-50 border border-green-200 text-green-700 p-4 rounded-2xl cursor-pointer">
              <LayoutDashboard />
              <p className="font-semibold">Dashboard</p>
            </div>

            <div className="flex items-center gap-4 text-gray-700 p-4 rounded-2xl hover:bg-gray-100 cursor-pointer transition">
              <ClipboardList />
              <p>My Requests</p>
            </div>

            <div className="flex items-center gap-4 text-gray-700 p-4 rounded-2xl hover:bg-gray-100 cursor-pointer transition">
              <Users />
              <p>Technicians</p>
            </div>

            <div className="flex items-center gap-4 text-gray-700 p-4 rounded-2xl hover:bg-gray-100 cursor-pointer transition">
              <AlertTriangle />
              <p>Emergency Help</p>
            </div>

           <div
  onClick={() => navigate("/business-profile")}
  className="flex items-center gap-4 text-gray-700 p-4 rounded-2xl hover:bg-gray-100 cursor-pointer transition"
>
  <User />
  <p>Profile</p>
</div>

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


      {/* MAIN CONTENT */}

      <section className="flex-1 p-10">


        {/* PAGE TITLE */}

        <h1 className="text-4xl font-bold text-green-700 mb-10">
          Business Dashboard
        </h1>


        {/* WELCOME CARD */}

        <div className="bg-white border border-gray-300 rounded-3xl p-8 mb-8">

          <p className="text-gray-500">
            Welcome back,
          </p>

          <h2 className="text-4xl font-bold text-black mt-2">
            Burger House Restaurant
          </h2>

          <p className="text-gray-600 mt-3">
            Manage your IT requests and connect with local technicians.
          </p>

        </div>


        {/* MAIN GRID */}

        <div className="grid grid-cols-3 gap-8">


          {/* ACTIVE REQUESTS */}

          <div className="col-span-2 bg-white border border-gray-300 rounded-3xl p-8">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-2xl font-bold text-black">
                Active Requests
              </h2>

              <p className="text-green-700 cursor-pointer">
                View all
              </p>

            </div>


            {/* REQUEST 1 */}

            <div className="flex items-center justify-between border-b pb-6 mb-6">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl border border-gray-300 flex items-center justify-center">
                  <Monitor />
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    POS System Down
                  </h3>

                  <p className="text-gray-500">
                    Pending Technician Approval
                  </p>

                </div>

              </div>

              <button className="px-6 py-3 bg-yellow-100 text-yellow-700 rounded-xl">
                Pending
              </button>

            </div>


            {/* REQUEST 2 */}

            <div className="flex items-center justify-between border-b pb-6 mb-6">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl border border-gray-300 flex items-center justify-center">
                  <Wifi />
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Network Setup
                  </h3>

                  <p className="text-gray-500">
                    Technician Assigned
                  </p>

                </div>

              </div>

              <button className="px-6 py-3 bg-green-100 text-green-700 rounded-xl">
                Active
              </button>

            </div>


            {/* REQUEST 3 */}

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl border border-gray-300 flex items-center justify-center">
                  <Printer />
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Printer Issue
                  </h3>

                  <p className="text-gray-500">
                    Completed
                  </p>

                </div>

              </div>

              <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl">
                Done
              </button>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div className="space-y-8">


            {/* QUICK ACTION */}

            <div className="bg-white border border-gray-300 rounded-3xl p-8">

              <h2 className="text-2xl font-bold text-black mb-6">
                Quick Actions
              </h2>

              <button className="w-full bg-green-700 text-white py-4 rounded-2xl font-semibold hover:bg-green-800 transition">
                Request IT Support
              </button>

              <button className="w-full border border-green-700 text-green-700 py-4 rounded-2xl font-semibold mt-4 hover:bg-green-50 transition">
                Emergency Request
              </button>

            </div>


            {/* TECHNICIANS */}

            <div className="bg-white border border-gray-300 rounded-3xl p-8">

              <h2 className="text-2xl font-bold text-black mb-6">
                Available Technicians
              </h2>

              <div className="space-y-5">

                <div>
                  <p className="font-bold">
                    Ahmed Ben Ali
                  </p>

                  <p className="text-gray-500">
                    Network Specialist
                  </p>
                </div>

                <div>
                  <p className="font-bold">
                    Sarah Johnson
                  </p>

                  <p className="text-gray-500">
                    Hardware Technician
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>

  );

}

export default BusinessDashboard;