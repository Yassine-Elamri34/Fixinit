import { useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  Clock,
  ShieldCheck,
  Bell,
} from "lucide-react";

function EmergencyAccess() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gray-100">

      {/* HERO */}

      <section className="bg-red-600 text-white py-20">

        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">

          <AlertTriangle
            size={70}
            className="mx-auto mb-6"
          />

          <h1 className="text-4xl md:text-6xl font-bold">
            Emergency IT Support
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-red-100">
            Critical technical issue affecting your business?
            Get priority access to local technicians and receive
            emergency assistance as quickly as possible.
          </p>

        </div>

      </section>

      {/* CONTENT */}

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <div className="bg-white rounded-3xl p-8 shadow-md">

            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              What You Get
            </h2>

            <div className="space-y-6">

              <div className="flex gap-4">

                <Bell
                  size={30}
                  className="text-red-600 flex-shrink-0"
                />

                <div>

                  <h3 className="font-bold text-lg">
                    Priority Visibility
                  </h3>

                  <p className="text-gray-600">
                    Your request is highlighted to available
                    technicians before standard requests.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Clock
                  size={30}
                  className="text-red-600 flex-shrink-0"
                />

                <div>

                  <h3 className="font-bold text-lg">
                    Fast Response Goal
                  </h3>

                  <p className="text-gray-600">
                    Target response time of 10 minutes or less.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <ShieldCheck
                  size={30}
                  className="text-red-600 flex-shrink-0"
                />

                <div>

                  <h3 className="font-bold text-lg">
                    Trusted Local Technicians
                  </h3>

                  <p className="text-gray-600">
                    Connect with nearby IT professionals
                    ready to assist your business.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-white rounded-3xl shadow-md p-10 flex flex-col justify-center">

            <div className="text-center">

              <p className="text-red-600 font-semibold uppercase tracking-wider">
                Emergency Access Fee
              </p>

              <h2 className="text-7xl font-bold text-red-600 mt-4">
                $10
              </h2>

              <p className="text-xl text-gray-500 mt-2">
                One-Time Priority Fee
              </p>

            </div>

            <div className="mt-10 bg-red-50 border border-red-200 rounded-2xl p-5">

              <h3 className="font-bold text-red-700 mb-3">
                Why is there a fee?
              </h3>

              <p className="text-gray-600">
                This fee helps prioritize your request,
                instantly notify available technicians,
                and maintain emergency support availability
                across the platform.
              </p>

            </div>

            <button
              onClick={() => navigate("/payment")}
              className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl text-lg font-bold transition"
            >
              Continue to Emergency Request
            </button>

            <p className="text-center text-gray-500 text-sm mt-4">
              No technician fee is included. Technician rates
              are discussed directly after acceptance.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default EmergencyAccess;