import { useEffect, useState } from "react";
import axios from "axios";

function TechnicianProfile() {
  const userId = 1;
  const technicianId = 1;

  const [profilePicture, setProfilePicture] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [description, setDescription] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  const [schedule, setSchedule] = useState([
    { day: "Monday", isAvailable: false, startHour: "", endHour: "" },
    { day: "Tuesday", isAvailable: false, startHour: "", endHour: "" },
    { day: "Wednesday", isAvailable: false, startHour: "", endHour: "" },
    { day: "Thursday", isAvailable: false, startHour: "", endHour: "" },
    { day: "Friday", isAvailable: false, startHour: "", endHour: "" },
    { day: "Saturday", isAvailable: false, startHour: "", endHour: "" },
    { day: "Sunday", isAvailable: false, startHour: "", endHour: "" },
  ]);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7294/api/Technician/profile/${userId}`
      );

      setProfilePicture(response.data.profilePicture || "");
      setDescription(response.data.description || "");
      setHourlyRate(response.data.hourlyRate || "");
      setCity(response.data.city || "");
      setRegion(response.data.region || "");
      setIsAvailable(response.data.isAvailable || false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSchedule = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7294/api/Technician/schedule/${technicianId}`
      );

      setSchedule((currentSchedule) =>
        currentSchedule.map((day) => {
          const savedDay = response.data.find(
            (s) => s.dayOfWeek === day.day
          );

          if (savedDay) {
            return {
              day: savedDay.dayOfWeek,
              isAvailable: savedDay.isAvailable,
              startHour: savedDay.startHour,
              endHour: savedDay.endHour,
            };
          }

          return day;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
    fetchSchedule();
  }, []);

  const updateProfile = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7294/api/Technician/update-profile",
        {
          userId,
          description,
          hourlyRate,
          city,
          region,
          isAvailable,
        }
      );

      alert(response.data);
      fetchProfile();
    } catch (error) {
      alert("Error updating profile");
    }
  };

  const updateSchedule = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7294/api/Technician/save-schedule",
        schedule.map((item) => ({
          technicianId,
          dayOfWeek: item.day,
          startHour: item.startHour,
          endHour: item.endHour,
          isAvailable: item.isAvailable,
        }))
      );

      alert(response.data);
      fetchSchedule();
    } catch (error) {
      alert("Error updating schedule");
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
        "https://localhost:7294/api/Technician/upload-picture",
        formData
      );

      setProfilePicture(response.data);
      alert("Profile picture uploaded");
    } catch (error) {
      alert("Error uploading picture");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-5xl mx-auto space-y-6">

        <div className="bg-white rounded-3xl shadow-md p-8 flex items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
            {profilePicture ? (
              <img
                src={`https://localhost:7294${profilePicture}`}
                alt="Technician"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400">No Image</span>
            )}
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-bold text-blue-700">
              Technician Profile
            </h1>

            <p className="text-gray-600 mt-2">
              {city || "City not set"} {region && `, ${region}`}
            </p>

            <p className={isAvailable ? "text-green-600 mt-2 font-semibold" : "text-red-500 mt-2 font-semibold"}>
              {isAvailable ? "Available for requests" : "Not available for requests"}
            </p>

            <div className="mt-5 flex gap-4">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />

              <button
                type="button"
                onClick={uploadPicture}
                className="bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800"
              >
                Upload Picture
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              About Me
            </h2>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-2xl p-4 h-40"
              placeholder="Describe your technical experience"
            />

            <button
              type="button"
              onClick={updateProfile}
              className="mt-5 bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800"
            >
              Update Description
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              Service Details
            </h2>

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

            <button
              type="button"
              onClick={updateProfile}
              className="mt-5 bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800"
            >
              Update Service Details
            </button>
          </div>

        </div>

        

        <div className="bg-white rounded-3xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">
            Weekly Schedule
          </h2>

          <div className="space-y-5">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-2xl p-5"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">{item.day}</h3>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={item.isAvailable}
                      onChange={(e) => {
                        const updatedSchedule = [...schedule];
                        updatedSchedule[index].isAvailable = e.target.checked;
                        setSchedule(updatedSchedule);
                      }}
                    />

                    <p>Available</p>
                  </div>
                </div>

                {item.isAvailable ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2">Start Hour</label>
                      <input
                        type="time"
                        value={item.startHour}
                        onChange={(e) => {
                          const updatedSchedule = [...schedule];
                          updatedSchedule[index].startHour = e.target.value;
                          setSchedule(updatedSchedule);
                        }}
                        className="w-full border border-gray-300 rounded-xl p-3"
                      />
                    </div>

                    <div>
                      <label className="block mb-2">End Hour</label>
                      <input
                        type="time"
                        value={item.endHour}
                        onChange={(e) => {
                          const updatedSchedule = [...schedule];
                          updatedSchedule[index].endHour = e.target.value;
                          setSchedule(updatedSchedule);
                        }}
                        className="w-full border border-gray-300 rounded-xl p-3"
                      />
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500">Unavailable</p>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={updateSchedule}
            className="mt-8 w-full bg-blue-700 text-white py-4 rounded-2xl font-semibold hover:bg-blue-800"
          >
            Update Schedule
          </button>
        </div>

      </div>
    </main>
  );
}

export default TechnicianProfile;