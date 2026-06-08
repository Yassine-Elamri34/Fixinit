import FixinitTeam from "../assets/FixinitTeam.png";
import {
  Shield,
  Clock,
  Wrench,
  Users,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import FixinitVideo from "../assets/fixinit-video.mp4";
function Home() {
  const navigate = useNavigate();

  return (
    <main className="bg-gray-50">
{/* VIDEO HERO */}

<section className="relative h-[350px] overflow-hidden">

  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source
      src={FixinitVideo}
      type="video/mp4"
    />
  </video>

  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

    <div className="text-center text-white px-6">

      <h1 className="text-6xl font-bold mb-4">
        Fast Local IT Support
      </h1>

      <p className="text-xl max-w-3xl">
        Connect with trusted technicians for on-site,
        emergency, and business IT support
      </p>

    </div>

  </div>

</section>
      {/* HERO */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
              Trusted Local IT Support
            </span>

            <h1 className="text-6xl font-bold text-gray-900 mt-6 leading-tight">
              Fast IT Support When Your Business Needs It Most
            </h1>

            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Connect with skilled local IT technicians for
              troubleshooting, emergency support, network issues,
              POS systems, hardware repairs, and more.
            </p>

            <div className="flex gap-4 mt-10">

              <button
                onClick={() => navigate("/get-it-support")}
                className="bg-[#041B4D] hover:bg-blue-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2"
              >
                Get IT Support
                <ArrowRight size={20} />
              </button>

              <button
                onClick={() => navigate("/become-technician")}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold"
              >
                Join as Technician
              </button>

            </div>

          </div>

          <div>

            <img
              src={FixinitTeam}
              alt="Fixinit Team"
              className="rounded-3xl shadow-lg w-full"
            />

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-4xl font-bold text-[#041B4D]">
                24/7
              </h2>
              <p className="text-gray-600 mt-2">
                Emergency Support
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#041B4D]">
                10 Min
              </h2>
              <p className="text-gray-600 mt-2">
                Emergency Response Goal
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#041B4D]">
                100%
              </h2>
              <p className="text-gray-600 mt-2">
                Local Technicians
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#041B4D]">
                Fast
              </h2>
              <p className="text-gray-600 mt-2">
                On-Site Support
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold text-center text-[#041B4D] mb-14">
          Why Choose Fixinit?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white p-8 rounded-3xl border border-gray-200">

            <Shield
              size={40}
              className="text-blue-700 mb-4"
            />

            <h3 className="font-bold text-xl mb-3">
              Trusted Technicians
            </h3>

            <p className="text-gray-600">
              Connect with qualified local IT professionals.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200">

            <Clock
              size={40}
              className="text-blue-700 mb-4"
            />

            <h3 className="font-bold text-xl mb-3">
              Fast Response
            </h3>

            <p className="text-gray-600">
              Get assistance when technical problems arise.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200">

            <Wrench
              size={40}
              className="text-blue-700 mb-4"
            />

            <h3 className="font-bold text-xl mb-3">
              Multiple Services
            </h3>

            <p className="text-gray-600">
              Hardware, software, networking, POS and more.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200">

            <Users
              size={40}
              className="text-blue-700 mb-4"
            />

            <h3 className="font-bold text-xl mb-3">
              Business Focused
            </h3>

            <p className="text-gray-600">
              Designed specifically for business IT needs.
            </p>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center text-[#041B4D] mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold text-blue-700 mb-4">
                1
              </h3>
              <p>Register an account</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-700 mb-4">
                2
              </h3>
              <p>Find a technician</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-700 mb-4">
                3
              </h3>
              <p>Submit a request</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-blue-700 mb-4">
                4
              </h3>
              <p>Receive IT support</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gray-100 py-20">

        <div className="max-w-5xl mx-auto px-8">

          <div className="bg-white rounded-3xl p-12 text-center">

            <h2 className="text-5xl font-bold text-[#041B4D] mb-6">
              Ready to Get Started?
            </h2>

            <p className="text-xl text-gray-600 mb-10">
              Whether you need IT support or want to offer your
              services as a technician, Fixinit makes it simple
            </p>

            <div className="flex justify-center gap-4 flex-wrap">

              <button
                onClick={() => navigate("/get-it-support")}
                className="bg-[#041B4D] text-white px-8 py-4 rounded-2xl font-bold"
              >
                Get IT Support
              </button>

              <button
                onClick={() => navigate("/become-technician")}
                className="bg-green-600 text-white px-8 py-4 rounded-2xl font-bold"
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

export default Home;