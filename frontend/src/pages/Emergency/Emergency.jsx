import { useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  Zap,
  Clock,
  ShieldAlert,
  CreditCard,
  CheckCircle,
} from "lucide-react";

function Emergency() {
  const navigate = useNavigate();

  return (
    <main className="bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-red-900 to-red-600 text-white py-24">

        <div className="max-w-7xl mx-auto px-8 text-center">

          <AlertTriangle
            size={80}
            className="mx-auto mb-6"
          />

          <h1 className="text-6xl font-bold mb-6">
            Emergency IT Help
          </h1>

          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            Critical technical issue? Don't wait.
            Connect with an available IT technician and receive
            priority support for urgent business problems.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <button
              onClick={() => navigate("/login")}
              className="bg-white text-red-700 px-8 py-4 rounded-2xl font-bold text-lg"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/sign-up")}
              className="bg-red-800 hover:bg-red-900 px-8 py-4 rounded-2xl font-bold text-lg transition"
            >
              Create Account
            </button>

          </div>

        </div>

      </section>

      {/* RESPONSE TIME */}

      <section className="max-w-6xl mx-auto px-8 py-20">

        <div className="bg-red-50 border border-red-200 rounded-3xl p-10 text-center">

          <Clock
            size={60}
            className="mx-auto text-red-600 mb-4"
          />

          <h2 className="text-4xl font-bold text-red-700 mb-4">
            Target Response Time: 10 Minutes
          </h2>

          <p className="text-lg text-gray-700">
            Emergency requests are prioritized and immediately
            visible to available technicians.
          </p>

        </div>

      </section>

      {/* BENEFITS */}

      <section className="max-w-7xl mx-auto px-8 pb-20">

        <h2 className="text-4xl font-bold text-center mb-14 text-red-700">
          Why Use Emergency Support?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-md text-center">

            <Zap
              size={40}
              className="mx-auto text-red-600 mb-4"
            />

            <h3 className="font-bold text-xl mb-3">
              Fast Response
            </h3>

            <p className="text-gray-600">
              Emergency requests receive immediate attention.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md text-center">

            <ShieldAlert
              size={40}
              className="mx-auto text-red-600 mb-4"
            />

            <h3 className="font-bold text-xl mb-3">
              Critical Issues
            </h3>

            <p className="text-gray-600">
              Designed for urgent business disruptions.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md text-center">

            <Clock
              size={40}
              className="mx-auto text-red-600 mb-4"
            />

            <h3 className="font-bold text-xl mb-3">
              24/7 Availability
            </h3>

            <p className="text-gray-600">
              Emergency support whenever you need it.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md text-center">

            <CheckCircle
              size={40}
              className="mx-auto text-red-600 mb-4"
            />

            <h3 className="font-bold text-xl mb-3">
              Priority Service
            </h3>

            <p className="text-gray-600">
              Your request moves ahead of standard requests.
            </p>

          </div>

        </div>

      </section>

      {/* COMMON EMERGENCIES */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center mb-14 text-red-700">
            Common Emergency Situations
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "POS System Failure",
              "Internet Outage",
              "Network Failure",
              "Server Downtime",
              "Payment Terminal Issues",
              "Security Incident",
              "Software Crash",
              "Hardware Failure",
              "Business System Outage",
            ].map((item) => (

              <div
                key={item}
                className="bg-red-50 border border-red-100 rounded-2xl p-5"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold text-center mb-14 text-red-700">
          How Emergency Support Works
        </h2>

        <div className="grid md:grid-cols-5 gap-8 text-center">

          <div>
            <h3 className="text-4xl font-bold text-red-600 mb-3">1</h3>
            <p>Create or Login</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-600 mb-3">2</h3>
            <p>Describe the Issue</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-600 mb-3">3</h3>
            <p>Pay Priority Fee</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-600 mb-3">4</h3>
            <p>Technicians Notified</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-600 mb-3">5</h3>
            <p>Get Help Fast</p>
          </div>

        </div>

      </section>

      {/* PRIORITY FEE */}

      <section className="bg-red-50 py-20">

        <div className="max-w-4xl mx-auto px-8 text-center">

          <CreditCard
            size={60}
            className="mx-auto text-red-600 mb-6"
          />

          <h2 className="text-4xl font-bold text-red-700 mb-6">
            Emergency Priority Fee
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Emergency requests include an additional priority
            service fee. This ensures your request receives
            immediate visibility and attention from available
            technicians.
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-red-900 py-12">

        <div className="max-w-5xl mx-auto px-8">

          <div className="bg-white rounded-3xl p-12 text-center">

            <h2 className="text-5xl font-bold text-red-700 mb-6">
              Need Immediate Assistance?
            </h2>

            <p className="text-xl text-gray-600 mb-10">
              Login or create an account to submit an emergency
              request and connect with an IT technician.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">

              <button
                onClick={() => navigate("/login")}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/sign-up")}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold"
              >
                Create Account
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Emergency;