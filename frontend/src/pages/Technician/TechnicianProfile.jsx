import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";




function TechnicianProfile() {
const fetchProfile = async () => {

  try {

    const response = await axios.get(
      "https://localhost:7294/api/Technician/profile/1"
    );

    setDescription(response.data.description);
    setHourlyRate(response.data.hourlyRate);
    setCity(response.data.city);
    setRegion(response.data.region);
    setIsAvailable(response.data.isAvailable);

  }
  catch(error){

    console.log(error);

  }

};
const fetchSchedule = async () => {

  try {

    const response = await axios.get(
      "https://localhost:7294/api/Technician/schedule/1"
    );

    const loadedSchedule = schedule.map(day => {

      const savedDay = response.data.find(
        s => s.dayOfWeek === day.day
      );

      if(savedDay){

        return {
          day: savedDay.dayOfWeek,
          isAvailable: savedDay.isAvailable,
          startHour: savedDay.startHour,
          endHour: savedDay.endHour
        };

      }

      return day;

    });

    setSchedule(loadedSchedule);

  }
  catch(error){

    console.log(error);

  }

};

    const [schedule, setSchedule] = useState([
  {
    day: "Monday",
    isAvailable: false,
    startHour: "",
    endHour: "",
  },
  {
    day: "Tuesday",
    isAvailable: false,
    startHour: "",
    endHour: "",
  },
  {
    day: "Wednesday",
    isAvailable: false,
    startHour: "",
    endHour: "",
  },
  {
    day: "Thursday",
    isAvailable: false,
    startHour: "",
    endHour: "",
  },
  {
    day: "Friday",
    isAvailable: false,
    startHour: "",
    endHour: "",
  },
  {
    day: "Saturday",
    isAvailable: false,
    startHour: "",
    endHour: "",
  },
  {
    day: "Sunday",
    isAvailable: false,
    startHour: "",
    endHour: "",
  },
]);

  const [description, setDescription] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  
useEffect(() => {

  fetchProfile();
  fetchSchedule();

}, []);
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
    await axios.post(
  "https://localhost:7294/api/Technician/save-schedule",
  schedule.map((item) => ({
    technicianId: 1,
    dayOfWeek: item.day,
    startHour: item.startHour,
    endHour: item.endHour,
    isAvailable: item.isAvailable,
  }))
);

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
          <div className="mt-10">

  <h2 className="text-2xl font-bold text-blue-700 mb-6">
    Weekly Schedule
  </h2>

  <div className="space-y-6">

    {schedule.map((item, index) => (

      <div
        key={index}
        className="border border-gray-300 rounded-2xl p-5"
      >

        <div className="flex items-center justify-between mb-4">

          <h3 className="font-bold text-lg">
            {item.day}
          </h3>

          <div className="flex items-center gap-3">

            <input
              type="checkbox"
              checked={item.isAvailable}
              onChange={(e) => {

                const updatedSchedule = [...schedule];

                updatedSchedule[index].isAvailable =
                  e.target.checked;

                setSchedule(updatedSchedule);

              }}
            />

            <p>
              Available
            </p>

          </div>

        </div>


        {item.isAvailable && (

          <div className="grid grid-cols-2 gap-4">

            <div>

              <label className="block mb-2">
                Start Hour
              </label>

              <input
                type="time"
                value={item.startHour}
                onChange={(e) => {

                  const updatedSchedule = [...schedule];

                  updatedSchedule[index].startHour =
                    e.target.value;

                  setSchedule(updatedSchedule);

                }}
                className="w-full border border-gray-300 rounded-xl p-3"
              />

            </div>


            <div>

              <label className="block mb-2">
                End Hour
              </label>

              <input
                type="time"
                value={item.endHour}
                onChange={(e) => {

                  const updatedSchedule = [...schedule];

                  updatedSchedule[index].endHour =
                    e.target.value;

                  setSchedule(updatedSchedule);

                }}
                className="w-full border border-gray-300 rounded-xl p-3"
              />

            </div>

          </div>

        )}

      </div>

    ))}

  </div>

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