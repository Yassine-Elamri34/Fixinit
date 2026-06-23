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
  const [reviews, setReviews] = useState([]);

  const createRequest = async () => {
    if (!title.trim()) {
      alert("Request Title is required");
      return;
    }
    if (!description.trim()) {
      alert("Problem Description is required");
      return;
    }
    try {
      await axios.post("https://2.24.202.188/api/Request/create", {
        businessOwnerId: 1,
        technicianId: selectedTechnicianId,
        title,
        description,
        status: "Pending",
      });
      alert("Request submitted successfully");
      setSubmittedRequests([...submittedRequests, selectedTechnicianId]);
      setShowRequestForm(false);
      setTitle("");
      setDescription("");
    } catch (error) {
      alert("Error creating request");
    }
  };

  const fetchTechnicians = async () => {
    try {
      const response = await axios.get("https://2.24.202.188/api/Technician/all");
      console.log("FIRST TECHNICIAN:", response.data[0]);
      setTechnicians(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await axios.get("https://2.24.202.188/api/Review");
      console.log("FIRST REVIEW:", response.data[0]);
      setReviews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTechnicians();
    fetchReviews();
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

              <p className="mt-2">${technician.hourlyRate}/hour</p>

              <p className="text-sm text-gray-600 mt-3">
                {technician.description}
              </p>

             <div className="mt-4">
  <p className="font-semibold text-gray-700 mb-2">
    Reviews
  </p>

  {reviews.slice(0, 3).map((review) => (
    <div
      key={review.reviewId}
      className="bg-gray-100 rounded-xl p-3 mb-2"
    >
      <p className="text-sm text-gray-700">
        {review.comment}
      </p>
    </div>
  ))}
</div>

              {technician.skills && (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Skills
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {technician.skills.split(",").map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {skill.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {submittedRequests.includes(technician.technicianId) ? (
                <div className="w-full mt-5 bg-green-100 text-green-700 py-3 rounded-xl text-center font-semibold">
                  Request Submitted ✅
                </div>
              ) : (
                <button
                  onClick={() => {
                    setSelectedTechnicianId(technician.technicianId);
                    setShowRequestForm(true);
                  }}
                  className="w-full mt-5 bg-green-700 text-white py-3 rounded-xl hover:bg-green-800"
                >
                  Request Help
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {showRequestForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-3xl w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6">Request Help</h2>

            <input
              type="text"
              placeholder="Request Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-xl p-3 mb-4"
            />

            <textarea
              placeholder="Describe the problem"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-xl p-3 h-32 mb-6"
            />

            <div className="flex gap-4">
              <button
                onClick={createRequest}
                className="flex-1 bg-green-700 text-white py-3 rounded-xl hover:bg-green-800"
              >
                Submit
              </button>
              <button
                onClick={() => setShowRequestForm(false)}
                className="flex-1 bg-gray-500 text-white py-3 rounded-xl hover:bg-gray-600"
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