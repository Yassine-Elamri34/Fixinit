import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




function TechnicianProfile() {
  const [skills, setSkills] = useState([]);
  const availableSkills = [
  "Windows Support",
  "Network Setup",
  "Wi-Fi Troubleshooting",
  "Printer Support",
  "POS System Support",
  "Microsoft 365",
  "Hardware Repair",
  "Software Installation",
  "Antivirus & Security",
  "Data Backup & Recovery",
  "Remote Support",
  "On-Site Support",
];
 const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const userId = 1;
  const technicianId = 1;

  const [profilePicture, setProfilePicture] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [description, setDescription] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);



  const fetchProfile = async () => {
    try {
      const response = await axios.get(
        `https://api.fixinit.ca/api/Technician/profile/${userId}`
      );
      setFirstName(response.data.firstName || "");
setLastName(response.data.lastName || "");
      setProfilePicture(response.data.profilePicture || "");
      setDescription(response.data.description || "");
      setSkills(
  response.data.skills
    ? response.data.skills.split(",")
    : []
);
      setHourlyRate(response.data.hourlyRate || "");
      setCity(response.data.city || "");
      setRegion(response.data.region || "");
      setIsAvailable(response.data.isAvailable || false);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
  fetchProfile();
}, []);

const updateProfile = async () => {

  console.log("Update button clicked");

  try {

    const response = await axios.post(
      "https://api.fixinit.ca/api/Technician/update-profile",
   {
  userId,
  firstName,
  lastName,
  description,
  hourlyRate,
  city,
  region,
  isAvailable,
  skills: skills.join(","),
}
    );

    console.log(response);

    alert(response.data);

    fetchProfile();

  } catch (error) {

    console.log(error);

    alert(error.response?.data || error.message);

  }

};

 

  const uploadPicture = async () => {
    if (!selectedFile) {
      alert("Please choose a picture first");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("file", selectedFile);

      const response = await axios.post(
        "https://api.fixinit.ca/api/Technician/upload-picture",
        formData
      );

      setProfilePicture(response.data);
      alert("Profile picture uploaded");
    } catch (error) {
      alert("Error uploading picture");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-10 overflow-x-hidden">
      <div className="max-w-5xl mx-auto space-y-6 w-full">
<button
  type="button"
  onClick={() => navigate("/technician-dashboard")}
  className="w-full sm:w-auto bg-gray-700 text-white px-5 py-2 rounded-xl hover:bg-gray-800"
>
  Back to Dashboard
</button>
        <div className="bg-white rounded-3xl shadow-md p-4 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center flex-shrink-0">
            {profilePicture ? (
              <img
                src={`https://api.fixinit.ca${profilePicture}`}
                alt="Technician"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400">No Image</span>
            )}
          </div>

          <div className="flex-1">
           <h1 className="text-2xl md:text-4xl font-bold text-blue-700">
  {firstName} {lastName}
</h1>

            <p className="text-gray-600 mt-2">
              {city || "City not set"} {region && `, ${region}`}
            </p>

            <p className={isAvailable ? "text-green-600 mt-2 font-semibold" : "text-red-500 mt-2 font-semibold"}>
              {isAvailable ? "Available for requests" : "Not available for requests"}
            </p>

            <div className="mt-5 flex flex-col sm:flex-row gap-4">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />

             
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

          <div className="bg-white rounded-3xl shadow-md p-4 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">
              About Me
            </h2>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-2xl p-4 h-40"
              placeholder="Describe your technical experience"
            />

           
          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Service Details
            </h2>
<label className="block mb-2 font-semibold">
  First Name
</label>

<input
  type="text"
  value={firstName}
  onChange={(e) => setFirstName(e.target.value)}
  className="w-full border border-gray-300 rounded-2xl p-4 mb-4"
/>

<label className="block mb-2 font-semibold">
  Last Name
</label>

<input
  type="text"
  value={lastName}
  onChange={(e) => setLastName(e.target.value)}
  className="w-full border border-gray-300 rounded-2xl p-4 mb-4"
/>
            <label className="block mb-2 font-semibold">Hourly Rate</label>
            <input
              type="number"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              className="w-full border border-gray-300 rounded-2xl p-4 mb-4"
              placeholder="Enter hourly rate"
            />

            <label className="block mb-2 font-semibold">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border border-gray-300 rounded-2xl p-4 mb-4"
              placeholder="Enter city"
            />

            <label className="block mb-2 font-semibold">Region</label>
            <input
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full border border-gray-300 rounded-2xl p-4"
              placeholder="Enter region"
            />

          
          </div>

        </div>
        <div className="bg-white rounded-3xl shadow-md p-4 md:p-8 mt-8">

  <h2 className="text-2xl font-bold text-gray-900 mb-6">
    Technical Skills
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

    {availableSkills.map((skill) => (

      <label
        key={skill}
        className="flex items-center gap-3 border border-gray-200 rounded-xl p-3 cursor-pointer hover:border-blue-500"
      >

        <input
          type="checkbox"
          checked={skills.includes(skill)}
          onChange={(e) => {

            if (e.target.checked) {

              setSkills([
                ...skills,
                skill
              ]);

            } else {

              setSkills(
                skills.filter(
                  (s) => s !== skill
                )
              );

            }

          }}
        />

        <span>{skill}</span>

      </label>

    ))}

  </div>

  

</div>
<button
  type="button"
  onClick={updateProfile}
  className="w-full mt-8 bg-blue-700 text-white py-4 rounded-2xl font-semibold hover:bg-blue-800"
>
  Update Profile
</button>
        

        

      </div>
    </main>
  );
}

export default TechnicianProfile;