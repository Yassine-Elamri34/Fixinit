import { useNavigate } from "react-router-dom";
import {
  Users,
  Briefcase,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gray-100">

      {/* HEADER */}

      <div className="bg-[#041B4D] text-white py-16">

        <div className="max-w-7xl mx-auto px-8 text-center">

          <h1 className="text-6xl font-bold">
            Admin Control Center
          </h1>

          <p className="text-blue-100 text-xl mt-4">
            Manage technicians, business owners, and platform activity.
          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">

          <div className="bg-white rounded-3xl p-8 shadow-md text-center">

            <Users
              size={45}
              className="mx-auto text-[#041B4D] mb-4"
            />

            <h2 className="text-4xl font-bold text-[#041B4D]">
              0
            </h2>

            <p className="text-gray-500 mt-2">
              Technicians
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md text-center">

            <Briefcase
              size={45}
              className="mx-auto text-blue-600 mb-4"
            />

            <h2 className="text-4xl font-bold text-blue-600">
              0
            </h2>

            <p className="text-gray-500 mt-2">
              Businesses
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md text-center">

            <ClipboardList
              size={45}
              className="mx-auto text-green-600 mb-4"
            />

            <h2 className="text-4xl font-bold text-green-600">
              0
            </h2>

            <p className="text-gray-500 mt-2">
              Requests
            </p>

          </div>

        </div>

        {/* MANAGEMENT CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* TECHNICIAN */}

          <div className="bg-white rounded-3xl shadow-md p-10">

            <Users
              size={55}
              className="text-[#041B4D] mb-6"
            />

            <h2 className="text-3xl font-bold text-[#041B4D]">
              Technician Management
            </h2>

            <p className="text-gray-500 mt-4 leading-7">
              Access technician profiles, schedules,
              requests, and support activities.
            </p>

            <button
              onClick={() =>
                navigate("/technician-dashboard")
              }
              className="mt-8 bg-[#041B4D] text-white px-6 py-3 rounded-2xl flex items-center gap-2 hover:bg-blue-900 transition"
            >
              Open Dashboard
              <ArrowRight size={18} />
            </button>

          </div>

          {/* BUSINESS */}

          <div className="bg-white rounded-3xl shadow-md p-10">

            <Briefcase
              size={55}
              className="text-blue-600 mb-6"
            />

            <h2 className="text-3xl font-bold text-blue-600">
              Business Management
            </h2>

            <p className="text-gray-500 mt-4 leading-7">
              View business owner activity,
              requests, and platform interactions.
            </p>

            <button
              onClick={() =>
                navigate("/business-dashboard")
              }
              className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-2xl flex items-center gap-2 hover:bg-blue-700 transition"
            >
              Open Dashboard
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}