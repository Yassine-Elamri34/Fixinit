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
 const technicianId = 1;
const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  const [technician, setTechnician] = useState(null);
const fetchRequests = async () => {
  try {
    const response = await axios.get(
      `https://localhost:7294/api/Request/technician/${technicianId}`
    );

    setRequests(response.data);
  } catch (error) {
    console.log(error);
  }
};

const acceptRequest = async (requestId) => {
  await axios.put(
    `https://localhost:7294/api/Request/accept/${requestId}`
  );

  fetchRequests();
};

const declineRequest = async (requestId) => {
  await axios.put(
    `https://localhost:7294/api/Request/decline/${requestId}`
  );

  fetchRequests();
};
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
  fetchRequests();
}, []);


  return (

    <main className="min-h-screen bg-gray-100 flex">

      {/* SIDEBAR */}

      <aside className="w-72 h-screen bg-white shadow-lg p-8 flex flex-col justify-between sticky top-0">

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


        </div>


        {/* MIDDLE SECTION */}

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

    {requests.length === 0 ? (

      <p className="text-gray-500">
        No available requests yet.
      </p>

    ) : (

      requests.map((request) => (

        <div
          key={request.requestId}
          className="flex items-center justify-between border-b pb-6 mb-6"
        >

          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
              <Monitor />
            </div>

            <div>

              <h3 className="font-bold text-lg">
                {request.title}
              </h3>

              <p className="text-gray-500">
                {request.description}
              </p>

              <p className="text-sm mt-1 font-semibold">
                Status: {request.status}
              </p>

            </div>

          </div>

          {request.status === "Pending" ? (

            <div className="flex gap-3">

              <button
                onClick={() =>
                  acceptRequest(request.requestId)
                }
                className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
              >
                Accept
              </button>

              <button
                onClick={() =>
                  declineRequest(request.requestId)
                }
                className="px-5 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600"
              >
                Decline
              </button>

            </div>

          ) : (

            <span className="px-5 py-3 bg-gray-100 text-gray-700 rounded-xl">
              {request.status}
            </span>

          )}

        </div>

      ))

    )}

  </div>

  {/* RIGHT SECTION */}

  <div className="space-y-8"></div>


          {/* RIGHT SECTION */}

          <div className="space-y-8">




           


          </div>

        </div>

      </section>

    </main>

  );

}

export default TechnicianDashboard;