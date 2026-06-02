import { useNavigate } from "react-router-dom";
import {
  Search,
  UserCheck,
  Clock,
  Shield,
  Briefcase,
  CheckCircle,
} from "lucide-react";

function GetItSupport() {
  const navigate = useNavigate();

  return (
    <main className="bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-[#041B4D] to-blue-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-8 text-center">

          <h1 className="text-6xl font-bold mb-6">
            Get Professional IT Support
          </h1>

          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Connect with skilled technicians in your area and
            get help with computer issues, networking problems,
            software installation, POS systems, and more.
          </p>

          <button
            onClick={() => navigate("/sign-up")}
            className="mt-10 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold text-lg transition"
          >
            Request Support
          </button>

        </div>

      </section>

      {/* BENEFITS */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold text-center text-[#041B4D] mb-14">
          Why Businesses Choose Fixinit
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-md">

            <UserCheck
              size={40}
              className="text-blue-700 mb-4"
            />

            <h3 className="text-xl font-bold mb-3">
              Qualified Technicians
            </h3>

            <p className="text-gray-600">
              Find skilled IT professionals ready to solve
              your technical issues.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md">

            <Clock
              size={40}
              className="text-blue-700 mb-4"
            />

            <h3 className="text-xl font-bold mb-3">
              Fast Response
            </h3>

            <p className="text-gray-600">
              Send requests directly to technicians and
              receive quick responses.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md">

            <Shield
              size={40}
              className="text-blue-700 mb-4"
            />

            <h3 className="text-xl font-bold mb-3">
              Reliable Support
            </h3>

            <p className="text-gray-600">
              Work with trusted professionals and track
              your requests through the platform.
            </p>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center text-[#041B4D] mb-16">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">

            <div>

              <Search
                size={50}
                className="mx-auto text-blue-700 mb-4"
              />

              <h3 className="font-bold text-xl mb-3">
                Find Technicians
              </h3>

              <p className="text-gray-600">
                Browse available technicians in your area.
              </p>

            </div>

            <div>

              <Briefcase
                size={50}
                className="mx-auto text-blue-700 mb-4"
              />

              <h3 className="font-bold text-xl mb-3">
                Send Request
              </h3>

              <p className="text-gray-600">
                Describe your issue and submit a request.
              </p>

            </div>

            <div>

              <UserCheck
                size={50}
                className="mx-auto text-blue-700 mb-4"
              />

              <h3 className="font-bold text-xl mb-3">
                Technician Responds
              </h3>

              <p className="text-gray-600">
                The technician accepts or declines your request.
              </p>

            </div>

            <div>

              <CheckCircle
                size={50}
                className="mx-auto text-blue-700 mb-4"
              />

              <h3 className="font-bold text-xl mb-3">
                Get Support
              </h3>

              <p className="text-gray-600">
                Work with the technician to solve your problem.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* COMMON ISSUES */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold text-center text-[#041B4D] mb-12">
          Common IT Issues We Help With
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          {[
            "Computer Repair",
            "Network Issues",
            "Printer Problems",
            "POS Support",
            "Internet Problems",
            "Software Installation",
            "Virus Removal",
            "Hardware Upgrades",
            "Office IT Support",
            "Emergency Assistance"
          ].map((item) => (

            <div
              key={item}
              className="bg-white px-6 py-3 rounded-full shadow-sm"
            >
              {item}
            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-5xl mx-auto px-8">

          <div className="bg-white rounded-3xl shadow-md p-12 text-center">

            <h2 className="text-5xl font-bold text-[#041B4D] mb-6">
              Need IT Support?
            </h2>

            <p className="text-xl text-gray-600 mb-10">
              Create your business account and connect with
              qualified technicians today.
            </p>

            <button
              onClick={() => navigate("/sign-up")}
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition"
            >
              Get IT Support
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}

export default GetItSupport;