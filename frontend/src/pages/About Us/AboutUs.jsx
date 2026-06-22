import { useNavigate } from "react-router-dom";
import {
  Shield,
  Users,
  Clock,
  Wrench,
  Monitor,
  CheckCircle,
} from "lucide-react";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}

      <section className="bg-[#041B4D] text-white py-20">

        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">

          <h1 className="text-4xl md:text-6xl font-bold">
            About Fixinit
          </h1>

          <p className="mt-6 text-base md:text-xl max-w-3xl mx-auto text-blue-100">
            Connecting businesses with trusted local IT technicians
            for fast, reliable, and on-site technical support.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <button
              onClick={() => navigate("/get-it-support")}
              className="w-full sm:w-auto bg-white text-[#041B4D] px-8 py-4 rounded-2xl font-bold"
            >
              Find Technicians
            </button>

            <button
              onClick={() => navigate("/become-technician")}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold"
            >
              Become a Technician
            </button>

          </div>

        </div>

      </section>

      {/* MISSION */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">

          <Shield
            size={60}
            className="mx-auto text-[#041B4D] mb-6"
          />

          <h2 className="text-3xl md:text-5xl font-bold text-[#041B4D]">
            Our Mission
          </h2>

          <p className="mt-8 text-base md:text-lg text-gray-600 leading-relaxed">
            Fixinit was created to simplify the process of finding
            qualified IT support. Businesses often lose valuable
            time searching for technicians when technical issues
            occur. Our goal is to connect businesses with local
            professionals who can provide fast, reliable, and
            on-site assistance whenever technical problems arise.
          </p>

        </div>

      </section>

      {/* WHAT WE DO */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#041B4D] mb-14">
            What We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-8 border border-gray-200">

              <Monitor
                size={45}
                className="text-[#041B4D] mb-5"
              />

              <h3 className="text-2xl font-bold mb-4">
                Local IT Support
              </h3>

              <p className="text-gray-600">
                Find technicians near your location for
                hardware, software, networking, printer,
                and business technology issues.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200">

              <Clock
                size={45}
                className="text-[#041B4D] mb-5"
              />

              <h3 className="text-2xl font-bold mb-4">
                Emergency Assistance
              </h3>

              <p className="text-gray-600">
                Request urgent technical support when
                downtime affects your business operations.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200">

              <Users
                size={45}
                className="text-[#041B4D] mb-5"
              />

              <h3 className="text-2xl font-bold mb-4">
                Connect Professionals
              </h3>

              <p className="text-gray-600">
                Give skilled technicians opportunities
                to connect with businesses actively
                searching for support.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE FIXINIT */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#041B4D] mb-14">
            Why Businesses Choose Fixinit
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-gray-50 rounded-3xl p-8">

              <Users size={40} className="text-blue-700 mb-4" />

              <h3 className="font-bold text-xl mb-3">
                Local Technicians
              </h3>

              <p className="text-gray-600">
                Connect with technicians in your area.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl p-8">

              <Clock size={40} className="text-blue-700 mb-4" />

              <h3 className="font-bold text-xl mb-3">
                Fast Response
              </h3>

              <p className="text-gray-600">
                Get help when issues impact operations.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl p-8">

              <Wrench size={40} className="text-blue-700 mb-4" />

              <h3 className="font-bold text-xl mb-3">
                Flexible Support
              </h3>

              <p className="text-gray-600">
                Choose the technician that fits your needs.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl p-8">

              <CheckCircle size={40} className="text-blue-700 mb-4" />

              <h3 className="font-bold text-xl mb-3">
                Transparent Reviews
              </h3>

              <p className="text-gray-600">
                Make informed decisions using ratings.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-4 md:px-8">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#041B4D] mb-16">
            How Fixinit Works
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold text-blue-700 mb-4">1</h3>
              <p>Create Account</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-700 mb-4">2</h3>
              <p>Find Technician</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-700 mb-4">3</h3>
              <p>Submit Request</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-700 mb-4">4</h3>
              <p>Receive Support</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-700 mb-4">5</h3>
              <p>Leave Review</p>
            </div>

          </div>

        </div>

      </section>

      {/* VALUES */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#041B4D] mb-14">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-gray-50 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Reliability
              </h3>

              <p className="text-gray-600">
                Helping businesses find dependable technical support.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Simplicity
              </h3>

              <p className="text-gray-600">
                Requesting IT support should be easy and stress-free.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Community
              </h3>

              <p className="text-gray-600">
                Supporting local businesses and local technicians.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gray-100 py-20">

        <div className="max-w-5xl mx-auto px-4 md:px-8">

          <div className="bg-white rounded-3xl p-8 md:p-12 text-center">

            <h2 className="text-3xl md:text-5xl font-bold text-[#041B4D] mb-6">
              Ready to Get Started?
            </h2>

            <p className="text-base md:text-xl text-gray-600 mb-10">
              Whether you need technical assistance or want to offer
              your expertise, Fixinit makes connecting simple.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">

              <button
                onClick={() => navigate("/get-it-support")}
                className="w-full sm:w-auto bg-[#041B4D] text-white px-8 py-4 rounded-2xl font-bold"
              >
                Get IT Support
              </button>

              <button
                onClick={() => navigate("/become-technician")}
                className="w-full sm:w-auto bg-green-600 text-white px-8 py-4 rounded-2xl font-bold"
              >
                Become a Technician
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default AboutUs;