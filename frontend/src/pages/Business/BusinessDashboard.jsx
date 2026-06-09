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
import { useState, useEffect } from "react";
import axios from "axios";



function BusinessDashboard() {
const userId = 1;
const businessOwnerId = 1;

const [requests, setRequests] = useState([]);
const [business, setBusiness] = useState(null);
const fetchRequests = async () => {

  try {

    const response = await axios.get(
      `https://localhost:7294/api/Request/business/${businessOwnerId}`
    );

    setRequests(response.data);

  } catch (error) {

    console.log(error);

  }

};
const fetchBusinessProfile = async () => {

  try {

    const response = await axios.get(
      `https://localhost:7294/api/BusinessOwner/profile/${userId}`
    );

    setBusiness(response.data);

  } catch (error) {

    console.log(error);

  }

};
const approveCompletion = async (requestId) => {

  try {

    await axios.put(
      `https://localhost:7294/api/Request/approve-completion/${requestId}`
    );

    fetchRequests();

    alert("Request approved");

  } catch (error) {

    console.log(error);

  }

};
useEffect(() => {

  fetchBusinessProfile();
  fetchRequests();

}, []);
  const navigate = useNavigate();

  return (

    <main className="min-h-screen bg-gray-100 flex">

      {/* SIDEBAR */}

      <aside className="w-72 h-screen bg-white shadow-lg p-8 flex flex-col justify-between sticky top-0">

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

            <div
  onClick={() => navigate("/technician")}
  className="flex items-center gap-4 text-gray-700 p-4 rounded-2xl hover:bg-gray-100 cursor-pointer transition"
>
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
          onClick={() => navigate("/login")}
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
  {business?.businessName || "Business Name"}
</h2>

         <p className="text-gray-600 mt-3">
  {business?.description || "No description available"}
</p>
<div className="mt-5 space-y-2">

  <p>
    <span className="font-semibold">
      Contact:
    </span>{" "}
    {business?.contactPersonFirstName}{" "}
    {business?.contactPersonLastName}
  </p>

  <p>
    <span className="font-semibold">
      Phone:
    </span>{" "}
    {business?.phoneNumber}
  </p>

  <p>
    <span className="font-semibold">
      Location:
    </span>{" "}
    {business?.city}, {business?.region}
  </p>

  <p>
    <span className="font-semibold">
      Business Type:
    </span>{" "}
    {business?.businessType}
  </p>

</div>

        </div>
        <div className="bg-white rounded-3xl shadow-md p-8">

  <h2 className="text-2xl font-bold mb-6">
    My Requests
  </h2>

  {requests.length === 0 ? (

    <p>No requests yet.</p>

  ) : (

    [...requests]
  .sort((a, b) => b.requestId - a.requestId)
  .map((request) => (

      <div
        key={request.requestId}
        className="border-b pb-4 mb-4"
      >

        <h3 className="font-bold">
          {request.title}
        </h3>

        <p className="text-gray-500">
          {request.description}
        </p>
        <div className="mt-2">

  <span className="font-semibold">
    Status:
  </span>

  {request.completionStatus === "Approved" ? (

    <span className="text-green-700 font-bold">
      {" "}Approved ✅
    </span>

  ) : request.completionStatus === "Pending Approval" ? (

    <span className="text-yellow-600 font-bold">
      {" "}Pending Business Approval
    </span>

  ) : request.status === "Accepted" ? (

    <span className="text-green-600 font-bold">
      {" "}Accepted
    </span>

  ) : request.status === "Pending" ? (

    <span className="text-yellow-600 font-bold">
      {" "}Pending
    </span>

  ) : (

    <span className="text-red-600 font-bold">
      {" "}Declined
    </span>

  )}

</div>
{request.completionStatus === "Pending Approval" && (

  <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">

    <p className="font-semibold text-gray-800">
      Technician Completion Notes
    </p>

    <p className="text-gray-600 mt-2">
      {request.completionNotes}
    </p>

    <p className="mt-4 font-semibold">
      Did the technician come and fix your issue?
    </p>

    <button
      onClick={() =>
        approveCompletion(request.requestId)
      }
      className="mt-3 bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700"
    >
      Approve Completion
    </button>

  </div>

)}
       

      </div>

    ))

  )}

</div>


        {/* MAIN GRID */}

        <div className="grid grid-cols-3 gap-8">




          {/* RIGHT SIDE */}

          <div className="space-y-8">





          </div>

        </div>

      </section>

    </main>

  );

}

export default BusinessDashboard;