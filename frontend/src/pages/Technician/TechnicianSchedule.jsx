import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TechnicianSchedule() {

  const navigate = useNavigate();

  const technicianId = 1;

  const [schedule, setSchedule] = useState([
    { day: "Monday", isAvailable: false, startHour: "", endHour: "" },
    { day: "Tuesday", isAvailable: false, startHour: "", endHour: "" },
    { day: "Wednesday", isAvailable: false, startHour: "", endHour: "" },
    { day: "Thursday", isAvailable: false, startHour: "", endHour: "" },
    { day: "Friday", isAvailable: false, startHour: "", endHour: "" },
    { day: "Saturday", isAvailable: false, startHour: "", endHour: "" },
    { day: "Sunday", isAvailable: false, startHour: "", endHour: "" },
  ]);

  const fetchSchedule = async () => {

    try {

      const response = await axios.get(
        `https://api.fixinit.ca:5000/api/Technician/schedule/${technicianId}`
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

    fetchSchedule();

  }, []);

  const updateSchedule = async () => {

    try {

      const response = await axios.post(
        "https://api.fixinit.ca:5000/api/Technician/save-schedule",
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

  return (

    <main className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-10 overflow-x-hidden">

      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

          <h1 className="text-2xl md:text-4xl font-bold text-blue-700">
            Weekly Schedule
          </h1>

          <button
            onClick={() => navigate("/technician-dashboard")}
            className="w-full sm:w-auto bg-gray-700 text-white px-5 py-3 rounded-xl hover:bg-gray-800"
          >
            Back to Dashboard
          </button>

        </div>

        <div className="bg-white rounded-3xl shadow-md p-4 md:p-8">

          <div className="space-y-5">

            {schedule.map((item, index) => (

              <div
                key={index}
                className="border border-gray-300 rounded-2xl p-4 md:p-5"
              >

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">

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

                    <p>Available</p>

                  </div>

                </div>

                {item.isAvailable && (

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

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

          <button
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

export default TechnicianSchedule;