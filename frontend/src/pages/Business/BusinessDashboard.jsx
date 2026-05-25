function BusinessDashboard() {

  return (

    <main className="min-h-screen bg-gray-100 p-10">

      {/* PAGE TITLE */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold text-gray-900">

          Request IT Help

        </h1>

        <p className="text-gray-500 mt-3 text-lg">

          Fill out the form below to submit your IT issue.

        </p>

      </div>


      {/* FORM CARD */}

      <div className="bg-white rounded-3xl shadow-md p-10 max-w-6xl">


        {/* SECTION TITLE */}

        <h2 className="text-3xl font-bold text-gray-900 mb-10">

          Request Details

        </h2>


        {/* CATEGORY + URGENCY */}

        <div className="grid grid-cols-2 gap-8 mb-8">

          <div>

            <label className="block mb-3 font-semibold text-gray-700">

              Category

            </label>

            <select className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none">

              <option>Select a category</option>

              <option>Network</option>

              <option>POS System</option>

              <option>Printer</option>

              <option>Hardware</option>

              <option>Software</option>

            </select>

          </div>


          <div>

            <label className="block mb-3 font-semibold text-gray-700">

              Urgency Level

            </label>

            <select className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none">

              <option>Select urgency</option>

              <option>Low</option>

              <option>Medium</option>

              <option>High</option>

              <option>Emergency</option>

            </select>

          </div>

        </div>


        {/* ISSUE TITLE */}

        <div className="mb-8">

          <label className="block mb-3 font-semibold text-gray-700">

            Issue Title

          </label>

          <input
            type="text"
            placeholder="E.g. Cannot connect to Wi-Fi"
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none"
          />

        </div>


        {/* DESCRIPTION */}

        <div className="mb-8">

          <label className="block mb-3 font-semibold text-gray-700">

            Describe the Issue

          </label>

          <textarea
            rows="6"
            placeholder="Provide more details about the issue..."
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none resize-none"
          ></textarea>

        </div>


        {/* DATE + TIME */}

        <div className="grid grid-cols-2 gap-8 mb-8">

          <div>

            <label className="block mb-3 font-semibold text-gray-700">

              Preferred Date

            </label>

            <input
              type="date"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none"
            />

          </div>


          <div>

            <label className="block mb-3 font-semibold text-gray-700">

              Preferred Time

            </label>

            <input
              type="time"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none"
            />

          </div>

        </div>


        {/* LOCATION */}

        <div className="mb-8">

          <label className="block mb-3 font-semibold text-gray-700">

            Location

          </label>

          <input
            type="text"
            placeholder="E.g. Office, Home, Restaurant..."
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none"
          />

        </div>


        {/* FILE */}

        <div className="mb-10">

          <label className="block mb-3 font-semibold text-gray-700">

            Attachments (optional)

          </label>

          <input
            type="file"
            className="w-full border border-gray-300 rounded-2xl px-5 py-4"
          />

        </div>


        {/* BUTTON */}

        <div className="flex justify-end">

          <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl hover:bg-blue-700 transition">

            Submit Request

          </button>

        </div>

      </div>

    </main>

  )

}

export default BusinessDashboard