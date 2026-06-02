import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {

  const navigate = useNavigate();

  return (

    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white shadow-2xl rounded-3xl p-14 w-full max-w-4xl text-center">

        <h1 className="text-5xl font-bold text-[#041B4D]">
          Hi Admin 👋
        </h1>

        <p className="text-gray-500 mt-6 text-lg">
          Which dashboard would you like to access?
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">

          {/* TECHNICIAN */}

          <div
            onClick={() => navigate("/technician-dashboard")}
            className="bg-[#041B4D] text-white rounded-3xl p-10 cursor-pointer hover:scale-105 transition"
          >

            <h2 className="text-3xl font-bold">
              Technician Dashboard
            </h2>

            <p className="mt-4 text-blue-100">
              Manage technicians, requests, and support activity.
            </p>

          </div>


          {/* BUSINESS */}

          <div
            onClick={() => navigate("/business-dashboard")}
            className="bg-blue-600 text-white rounded-3xl p-10 cursor-pointer hover:scale-105 transition"
          >

            <h2 className="text-3xl font-bold">
              Business Dashboard
            </h2>

            <p className="mt-4 text-blue-100">
              Access business owners area and service requests.
            </p>

          </div>

        </div>

      </div>

    </main>

  );
}