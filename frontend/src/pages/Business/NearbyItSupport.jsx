import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Wrench } from "lucide-react";
import axios from "axios";

function NearbyItSupport() {
  const navigate = useNavigate();

  const [region, setRegion] = useState("");

const [technicians, setTechnicians] = useState([]);

const searchTechnicians = async () => {

  if (!region.trim()) {
    return;
  }

  try {

    const response = await axios.get(
      `https://localhost:7294/api/Technician/search?region=${region}`
    );

    setTechnicians(response.data);

  } catch (error) {

    console.log(error);

  }

};  

  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-8">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

          <h1 className="text-3xl md:text-4xl font-bold text-green-700">
            Find Technicians
          </h1>

          <button
            onClick={() => navigate("/business-dashboard")}
            className="bg-gray-700 text-white px-5 py-3 rounded-xl hover:bg-gray-800"
          >
            Back to Dashboard
          </button>

        </div>

        {/* SEARCH BAR */}

        <div className="bg-white rounded-3xl shadow-md p-6 mb-8">

          <div className="flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="Search by region (Mississauga, Toronto, etc.)"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="flex-1 border border-gray-300 rounded-2xl p-4"
            />

            <button
  onClick={searchTechnicians}
  className="bg-green-600 text-white px-6 py-4 rounded-2xl hover:bg-green-700 flex items-center justify-center gap-2"
>
  <Search size={20} />
  Search
</button>

          </div>

        </div>

        {/* RESULTS */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {technicians.length === 0 ? (

            <div className="col-span-full bg-white rounded-3xl p-8 text-center">
              <p className="text-gray-500">
                No technicians found.
              </p>
            </div>

          ) : (

            technicians.map((tech) => (

              <div
                key={tech.technicianId}
                className="bg-white rounded-3xl shadow-md p-6"
              >

                <div className="flex items-center gap-4 mb-4">

                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">

  {tech.profilePicture ? (
    <img
      src={`https://localhost:7294${tech.profilePicture}`}
      alt="Technician"
      className="w-full h-full object-cover"
    />
  ) : null}

</div>

                  <div>

                    <h2 className="text-xl font-bold">
                      {tech.firstName} {tech.lastName}
                    </h2>

                    <p className="text-gray-500">
                      ${tech.hourlyRate}/hour
                    </p>

                  </div>

                </div>

                <div className="space-y-3">

                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} />
                    <span>
                      {tech.city}, {tech.region}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <Wrench size={18} />
                    <span>{tech.skills}</span>
                  </div>

                </div>

                <button
                  className="w-full mt-5 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
                >
                  View Profile
                </button>

              </div>

            ))

          )}

        </div>

      </div>

    </main>
  );
}

export default NearbyItSupport;