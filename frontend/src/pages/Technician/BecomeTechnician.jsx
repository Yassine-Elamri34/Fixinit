import { useNavigate } from "react-router-dom";
import {
  User,
  Calendar,
  Briefcase,
  Star,
  Wrench,
  Shield,
} from "lucide-react";
import TechnicianVideo from "../../assets/technician-video.mp4";
function BecomeTechnician() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gray-50">
{/* VIDEO BANNER */}

<div className="relative h-90  overflow-hidden ">

  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source
      src={TechnicianVideo}
      type="video/mp4"
    />
  </video>

  <div className="absolute inset-0 bg-black/40 flex items-center px-10">

    <div className="text-white">

      <h2 className="text-4xl font-bold">
        Manage Your IT Requests
      </h2>

      <p className="text-lg mt-3 max-w-2xl">
        Review incoming support requests, accept jobs,
        update progress, and keep businesses informed.
      </p>

    </div>

  </div>

</div>
      {/* HERO

      <section className="bg-gradient-to-r from-[#041B4D] to-blue-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-8 text-center">

          <h1 className="text-6xl font-bold mb-6">
            Become a Technician
          </h1>

          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Join Fixinit and connect with local businesses that
            need reliable IT support. Build your reputation,
            manage your schedule, and grow your opportunities.
          </p>

          <button
            onClick={() => navigate("/sign-up")}
            className="mt-10 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold text-lg transition"
          >
            Join Fixinit Today
          </button>

        </div>

      </section> */}

      {/* BENEFITS */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold text-center text-[#041B4D] mb-14">
          Why Join Fixinit?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition">

            <Briefcase
              size={40}
              className="text-blue-700 mb-4"
            />

            <h3 className="text-xl font-bold mb-3">
              More Opportunities
            </h3>

            <p className="text-gray-600">
              Receive direct IT service requests from businesses
              actively searching for support.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition">

            <Calendar
              size={40}
              className="text-blue-700 mb-4"
            />

            <h3 className="text-xl font-bold mb-3">
              Flexible Schedule
            </h3>

            <p className="text-gray-600">
              Choose when you're available and work according
              to your own schedule.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition">

            <Star
              size={40}
              className="text-blue-700 mb-4"
            />

            <h3 className="text-xl font-bold mb-3">
              Build Your Reputation
            </h3>

            <p className="text-gray-600">
              Earn ratings and reviews that help grow your
              profile and attract more clients.
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            <div className="text-center">

              <User
                size={50}
                className="mx-auto text-blue-700 mb-4"
              />

              <h3 className="font-bold text-xl mb-3">
                Create Your Profile
              </h3>

              <p className="text-gray-600">
                Add your skills, experience, location,
                description, and hourly rate.
              </p>

            </div>

            <div className="text-center">

              <Calendar
                size={50}
                className="mx-auto text-blue-700 mb-4"
              />

              <h3 className="font-bold text-xl mb-3">
                Set Your Availability
              </h3>

              <p className="text-gray-600">
                Define your weekly schedule so businesses know
                when you are available.
              </p>

            </div>

            <div className="text-center">

              <Briefcase
                size={50}
                className="mx-auto text-blue-700 mb-4"
              />

              <h3 className="font-bold text-xl mb-3">
                Receive Requests
              </h3>

              <p className="text-gray-600">
                Accept or decline requests and start helping
                local businesses.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold text-center text-[#041B4D] mb-14">
          Popular Services
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {[
            "Computer Repair",
            "Network Support",
            "Printer Setup",
            "POS Systems",
            "Software Installation",
            "Virus Removal",
            "Hardware Upgrades",
            "Internet Issues",
            "IT Consulting",
            "Emergency Support",
          ].map((service) => (

            <div
              key={service}
              className="bg-white p-5 rounded-2xl shadow-md text-center hover:shadow-lg transition"
            >

              <Wrench
                size={24}
                className="mx-auto text-blue-700 mb-3"
              />

              <p className="font-medium">
                {service}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* WHO CAN JOIN */}

      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-8 text-center">

          <Shield
            size={60}
            className="mx-auto text-blue-700 mb-6"
          />

          <h2 className="text-4xl font-bold text-[#041B4D] mb-8">
            Who Can Join?
          </h2>

          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Fixinit welcomes IT support specialists, help desk
            technicians, network technicians, system
            administrators, computer repair professionals,
            freelance consultants, and students with strong
            technical skills.
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-b from-white via-blue-50 to-[#041B4D] py-24">

        <div className="max-w-5xl mx-auto px-8">

         <div className="bg-white rounded-3xl shadow-md p-14 text-center">

            <h2 className="text-5xl font-bold text-[#041B4D] mb-6">
              Ready to Start?
            </h2>

            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Create your technician account today and begin
              receiving IT support requests from businesses in
              your area.
            </p>

            <button
              onClick={() => navigate("/sign-up")}
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition"
            >
              Become a Technician
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}

export default BecomeTechnician;