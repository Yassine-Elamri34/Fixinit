import {
  UserPlus,
  Search,
  Send,
  CheckCircle,
  Wrench,
  Briefcase,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function HowItWorks() {
     const navigate = useNavigate();
  return (
    

    <main className="min-h-screen bg-gray-100">

      {/* HERO */}

      <section className="bg-[#041B4D] text-white py-20">

        <div className="max-w-6xl mx-auto px-8 text-center">

          <h1 className="text-6xl font-bold">
            How Fixinit Works
          </h1>

          <p className="text-xl text-blue-100 mt-6 max-w-3xl mx-auto">
            Fixinit connects businesses with local IT technicians
            for fast, reliable, and professional technical support.
          </p>

        </div>

      </section>

      {/* BUSINESS OWNER */}

      <section className="max-w-6xl mx-auto px-8 py-20">

        <div className="text-center mb-14">

          <Briefcase
            size={60}
            className="mx-auto text-green-600 mb-4"
          />

          <h2 className="text-4xl font-bold text-[#041B4D]">
            For Business Owners
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-md text-center">

            <UserPlus className="mx-auto text-green-600 mb-4" size={40} />

            <h3 className="font-bold text-xl">
              Create an Account
            </h3>

            <p className="text-gray-500 mt-3">
              Register and access the business dashboard.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md text-center">

            <Search className="mx-auto text-green-600 mb-4" size={40} />

            <h3 className="font-bold text-xl">
              Find a Technician
            </h3>

            <p className="text-gray-500 mt-3">
              Browse available technicians and review their profiles.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md text-center">

            <Send className="mx-auto text-green-600 mb-4" size={40} />

            <h3 className="font-bold text-xl">
              Submit a Request
            </h3>

            <p className="text-gray-500 mt-3">
              Describe your IT issue and send a support request.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md text-center">

            <CheckCircle
              className="mx-auto text-green-600 mb-4"
              size={40}
            />

            <h3 className="font-bold text-xl">
              Receive Support
            </h3>

            <p className="text-gray-500 mt-3">
              Track the request status and receive assistance.
            </p>

          </div>

        </div>

      </section>

      {/* TECHNICIANS */}

      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-8">

          <div className="text-center mb-14">

            <Wrench
              size={60}
              className="mx-auto text-blue-600 mb-4"
            />

            <h2 className="text-4xl font-bold text-[#041B4D]">
              For Technicians
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-gray-50 rounded-3xl p-8 text-center">

              <UserPlus
                className="mx-auto text-blue-600 mb-4"
                size={40}
              />

              <h3 className="font-bold text-xl">
                Register
              </h3>

              <p className="text-gray-500 mt-3">
                Create your technician account.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl p-8 text-center">

              <Wrench
                className="mx-auto text-blue-600 mb-4"
                size={40}
              />

              <h3 className="font-bold text-xl">
                Complete Profile
              </h3>

              <p className="text-gray-500 mt-3">
                Add skills, location, hourly rate and availability.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl p-8 text-center">

              <Send
                className="mx-auto text-blue-600 mb-4"
                size={40}
              />

              <h3 className="font-bold text-xl">
                Receive Requests
              </h3>

              <p className="text-gray-500 mt-3">
                Businesses can send support requests directly to you.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl p-8 text-center">

              <CheckCircle
                className="mx-auto text-blue-600 mb-4"
                size={40}
              />

              <h3 className="font-bold text-xl">
                Accept or Decline
              </h3>

              <p className="text-gray-500 mt-3">
                Manage requests from your technician dashboard
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* EMERGENCY HELP */}

      <section className="py-20 bg-red-50">

        <div className="max-w-5xl mx-auto px-8 text-center">

          <h2 className="text-5xl font-bold text-red-600">
            Emergency IT Help
          </h2>

          <p className="text-xl text-gray-600 mt-6 leading-8">
            Businesses experiencing critical technical issues can
            submit an Emergency IT Request. Emergency requests
            receive priority visibility and are designed to connect
            businesses with available technicians as quickly as possible.
          </p>

          <div className="bg-white rounded-3xl p-8 shadow-md mt-10 inline-block">

            <h3 className="text-3xl font-bold text-red-600">
              Target Response Time
            </h3>

            <p className="text-6xl font-bold mt-4">
              10 Minutes
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default HowItWorks;