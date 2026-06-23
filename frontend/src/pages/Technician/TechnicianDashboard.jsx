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
const [completionNotes, setCompletionNotes] = useState({});
  const navigate = useNavigate();

  const [technician, setTechnician] = useState(null);
  const markCompleted = async (requestId) => {

  try {

    await axios.put(
      "https://api.fixinit.ca:5000/api/Request/update-completion",
      {
  requestId,
  completionStatus: "Pending Approval",
  completionNotes: completionNotes[requestId]
}
    );

    fetchRequests();

    alert("Request marked completed");

  } catch (error) {

    console.log(error);

  }

};
const fetchRequests = async () => {
  try {
    const response = await axios.get(
      `https://api.fixinit.ca:5000/api/Request/technician/${technicianId}`
    );

    setRequests(response.data);
  } catch (error) {
    console.log(error);
  }
};

const acceptRequest = async (requestId) => {
  await axios.put(
    `https://api.fixinit.ca:5000/api/Request/accept/${requestId}`
  );

  fetchRequests();
};

const declineRequest = async (requestId) => {
  await axios.put(
    `https://api.fixinit.ca:5000/api/Request/decline/${requestId}`
  );

  fetchRequests();
};
 useEffect(() => {
  const fetchTechnician = async () => {
    try {
      const response = await axios.get(
        "https://api.fixinit.ca:5000/api/Technician/profile/1"
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

    <main className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">

      {/* SIDEBAR */}

      <aside className="w-full lg:w-72 lg:h-screen bg-white shadow-lg p-4 lg:p-8 flex flex-col justify-between lg:sticky top-0">

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

            {/* <div 
            onClick={() => navigate("/available-requests")}
            className="flex items-center gap-4 text-gray-700 p-4 rounded-2xl hover:bg-gray-100 cursor-pointer transition">
              <ClipboardList />
              <p>Available Requests</p>
            </div> */}

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

      <section className="flex-1 p-4 md:p-6 lg:p-10">


        {/* TOP BAR */}

        <div className="flex items-center justify-between mb-10">

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Technician Dashboard
          </h1>

         

        </div>


        {/* TOP CARDS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">


          {/* PROFILE CARD */}

          <div className="bg-white rounded-3xl shadow-md p-4 md:p-8 flex flex-col md:flex-row items-center gap-4">

            <div className="flex items-center gap-6">

              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gray-200">
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

<div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

  {/* ACTIVE REQUESTS */}

  <div className="xl:col-span-2 bg-white rounded-3xl shadow-md p-4 md:p-8">

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
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b pb-6 mb-6"
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

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

              <button
                onClick={() =>
                  acceptRequest(request.requestId)
                }
                className="w-full sm:w-auto px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
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

  <div className="flex flex-col items-end gap-3">

   <span
  className={`px-5 py-3 rounded-xl font-semibold ${
    request.completionStatus === "Approved"
      ? "bg-green-100 text-green-700"
      : request.completionStatus === "Pending Approval"
      ? "bg-yellow-100 text-yellow-700"
      : request.status === "Accepted"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700"
  }`}
>
  {request.completionStatus === "Approved"
    ? "✅ Approved"
    : request.completionStatus === "Pending Approval"
    ? "⏳ Pending Approval"
    : request.status}
</span>

    {request.status === "Accepted" &&
 request.completionStatus !== "Pending Approval" &&
 request.completionStatus !== "Approved" && (

      <div className="w-full lg:w-72 bg-gray-50 border border-gray-200 rounded-2xl p-4">

        <p className="font-semibold mb-2 text-gray-800">
          Did you finish this task?
        </p>

        <textarea
          value={completionNotes[request.requestId] || ""}
          onChange={(e) =>
  setCompletionNotes({
    ...completionNotes,
    [request.requestId]: e.target.value,
  })
}
          placeholder="Describe the work completed..."
          className="w-full border rounded-xl p-3 mb-3 text-sm"
        />

        <button
          onClick={() =>
            markCompleted(request.requestId)
          }
          className="w-full bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700"
        >
          Mark Completed
        </button>

      </div>

    )}

  </div>

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