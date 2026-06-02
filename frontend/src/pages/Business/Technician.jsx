import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Technician() {
  const navigate = useNavigate();
 const [showRequestForm, setShowRequestForm] = useState(false);
const [submittedRequests, setSubmittedRequests] = useState([]);
const [selectedTechnicianId, setSelectedTechnicianId] = useState(null);

const [title, setTitle] = useState("");

const [description, setDescription] = useState("");
  const [technicians, setTechnicians] = useState([]);
const createRequest = async () => {

  try {

    await axios.post(
      "https://localhost:7294/api/Request/create",
      {
        businessOwnerId: 1,
        technicianId: selectedTechnicianId,
        title,
        description,
        status: "Pending"
      }
    );

    alert("Request submitted successfully");
    setSubmittedRequests([
  ...submittedRequests,
  selectedTechnicianId
]);

    setShowRequestForm(false);

    setTitle("");

    setDescription("");

  } catch (error) {

    alert("Error creating request");

  }

};
  const fetchTechnicians = async () => {

    try {

      const response = await axios.get(
        "https://localhost:7294/api/Technician/all"
      );

      setTechnicians(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchTechnicians();

  }, []);

  return (

    <main className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-green-700 mb-8">
          Available Technicians
        </h1>
        <div className="mb-6">

  <button
    onClick={() => navigate("/business-dashboard")}
    className="bg-gray-700 text-white px-5 py-3 rounded-xl hover:bg-gray-800"
  >
    ← Back to Dashboard
  </button>

</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {technicians.map((technician) => (

            <div
              key={technician.technicianId}
              className="bg-white rounded-3xl shadow-md p-6"
            >

              <h2 className="text-2xl font-bold">
                {technician.firstName} {technician.lastName}
              </h2>

              <p className="text-gray-500 mt-2">
                {technician.city}, {technician.region}
              </p>

              <p className="mt-2">
                ${technician.hourlyRate}/hour
              </p>

              <p className="text-sm text-gray-600 mt-3">
                {technician.description}
              </p>
{
  submittedRequests.includes(
    technician.technicianId
  ) ? (

    <div className="w-full mt-5 bg-green-100 text-green-700 py-3 rounded-xl text-center font-semibold">
      Request Submitted ✅
    </div>

  ) : (

    <button
      onClick={() => {

        setSelectedTechnicianId(
          technician.technicianId
        );

        setShowRequestForm(true);

      }}
      className="w-full mt-5 bg-green-700 text-white py-3 rounded-xl hover:bg-green-800"
    >
      Request Help
    </button>

  )
}

            </div>

          ))}

        </div>

      </div>
{showRequestForm && (

  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">

    <div className="bg-white p-8 rounded-3xl w-full max-w-lg">

      <h2 className="text-2xl font-bold mb-6">
        Request Help
      </h2>

      <input
        type="text"
        placeholder="Request Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full border rounded-xl p-3 mb-4"
      />

      <textarea
        placeholder="Describe the problem"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        className="w-full border rounded-xl p-3 h-32 mb-6"
      />

      <div className="flex gap-4">

        <button
          onClick={createRequest}
          className="flex-1 bg-green-700 text-white py-3 rounded-xl"
        >
          Submit
        </button>

        <button
          onClick={() =>
            setShowRequestForm(false)
          }
          className="flex-1 bg-gray-500 text-white py-3 rounded-xl"
        >
          Cancel
        </button>

      </div>

    </div>

  </div>

)}
    </main>

  );

}

export default Technician;