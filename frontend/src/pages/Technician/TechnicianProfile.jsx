import { useState } from "react";
import axios from "axios";





function TechnicianProfile() {


    

  const [description, setDescription] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://localhost:7294/api/Technician/update-profile",
        {
          userId: 1,

          description,

          hourlyRate,

          city,

          region,

          isAvailable
        }
      );

      alert(response.data);

    } catch (error) {

      alert("Error updating profile");

    }

  };

  return (

    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-10">

      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-2xl">

        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          Technician Profile
        </h1>


        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* DESCRIPTION */}

          <div>

            <label className="block mb-2 font-semibold">
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-2xl p-4 h-32"
              placeholder="Tell businesses about yourself"
            />

          </div>


          {/* HOURLY RATE */}

          <div>

            <label className="block mb-2 font-semibold">
              Hourly Rate
            </label>

            <input
              type="number"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              className="w-full border border-gray-300 rounded-2xl p-4"
              placeholder="Enter hourly rate"
            />

          </div>


          {/* CITY */}

          <div>

            <label className="block mb-2 font-semibold">
              City
            </label>

            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border border-gray-300 rounded-2xl p-4"
              placeholder="Enter city"
            />

          </div>


          {/* REGION */}

          <div>

            <label className="block mb-2 font-semibold">
              Region
            </label>

            <input
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full border border-gray-300 rounded-2xl p-4"
              placeholder="Enter region"
            />

          </div>


          {/* AVAILABILITY */}

          <div className="flex items-center gap-4">

            <input
              type="checkbox"
              checked={isAvailable}
              onChange={(e) => setIsAvailable(e.target.checked)}
            />

            <p className="font-semibold">
              Available for requests
            </p>

          </div>


          {/* BUTTON */}

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-4 rounded-2xl font-semibold hover:bg-blue-800 transition"
          >
            Save Profile
          </button>

        </form>

      </div>

    </main>

  );

}

export default TechnicianProfile;