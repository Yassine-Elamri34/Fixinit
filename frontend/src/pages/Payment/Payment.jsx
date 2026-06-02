import { useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  CreditCard,
  ShieldCheck,
  Clock,
  Lock,
} from "lucide-react";

function Payment() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-6xl mx-auto">

        <button
          onClick={() => navigate("/emergency")}
          className="mb-6 text-red-700 font-semibold hover:underline"
        >
          ← Back to Emergency Help
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}

          <div className="lg:col-span-2 bg-white rounded-3xl p-10 shadow-md">

            <div className="flex items-center gap-4 mb-8">

              <div className="bg-red-100 text-red-700 p-4 rounded-2xl">
                <AlertTriangle size={34} />
              </div>

              <div>
                <h1 className="text-4xl font-bold text-red-700">
                  Emergency IT Request
                </h1>

                <p className="text-gray-500 mt-2">
                  Priority support request with a target response time of 10 minutes.
                </p>
              </div>

            </div>

            {/* ISSUE INFORMATION */}

            <div className="mb-8">

              <h2 className="text-2xl font-bold mb-5">
                Business Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Business Name"
                  className="border border-gray-300 rounded-xl p-4"
                />

                <input
                  type="text"
                  placeholder="Contact Phone Number"
                  className="border border-gray-300 rounded-xl p-4"
                />

                <input
                  type="text"
                  placeholder="Business Address"
                  className="border border-gray-300 rounded-xl p-4 md:col-span-2"
                />

              </div>

            </div>

            {/* EMERGENCY DETAILS */}

            <div className="mb-8">

              <h2 className="text-2xl font-bold mb-5">
                Emergency Details
              </h2>

              <input
                type="text"
                placeholder="Issue Title, example: POS System Down"
                className="w-full border border-gray-300 rounded-xl p-4 mb-5"
              />

              <textarea
                placeholder="Describe the emergency issue"
                className="w-full border border-gray-300 rounded-xl p-4 h-32"
              />

            </div>

            {/* PAYMENT INFORMATION */}

            <div>

              <h2 className="text-2xl font-bold mb-5 flex items-center gap-3">
                <CreditCard />
                Payment Information
              </h2>

              <div className="grid grid-cols-1 gap-5">

                <input
                  type="text"
                  placeholder="Cardholder Name"
                  className="border border-gray-300 rounded-xl p-4"
                />

                <input
                  type="text"
                  placeholder="Card Number"
                  className="border border-gray-300 rounded-xl p-4"
                />

                <div className="grid grid-cols-2 gap-5">

                  <input
                    type="text"
                    placeholder="MM / YY"
                    className="border border-gray-300 rounded-xl p-4"
                  />

                  <input
                    type="text"
                    placeholder="CVV"
                    className="border border-gray-300 rounded-xl p-4"
                  />

                </div>

              </div>

              <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
                <Lock size={16} />
                This is a design-only payment form. No real payment is processed yet.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE SUMMARY */}

          <div className="bg-white rounded-3xl p-8 shadow-md h-fit">

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Payment Summary
            </h2>

            <div className="space-y-5 border-b pb-6">

              <div className="flex justify-between">
                <span className="text-gray-600">
                  Emergency Priority Fee
                </span>
                <span className="font-bold">
                  $29.99
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">
                  Platform Service Fee
                </span>
                <span className="font-bold">
                  $4.99
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">
                  Tax
                </span>
                <span className="font-bold">
                  $4.55
                </span>
              </div>

            </div>

            <div className="flex justify-between text-2xl font-bold mt-6">
              <span>Total</span>
              <span>$39.53</span>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mt-8">

              <div className="flex items-center gap-3 text-red-700 font-bold mb-2">
                <Clock />
                10-Minute Target Response
              </div>

              <p className="text-gray-600 text-sm">
                After payment, your emergency request becomes visible as a priority request to available technicians.
              </p>

            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mt-5">

              <div className="flex items-center gap-3 text-green-700 font-bold mb-2">
                <ShieldCheck />
                Secure Payment
              </div>

              <p className="text-gray-600 text-sm">
                Future integration can use Stripe, PayPal, or another secure payment provider.
              </p>

            </div>

            <button
              onClick={() => alert("Payment design only. No real payment processed.")}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-bold mt-8"
            >
              Pay and Submit Emergency Request
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Payment;