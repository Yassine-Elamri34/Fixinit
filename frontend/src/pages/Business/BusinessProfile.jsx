import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function BusinessProfile() {

      const navigate = useNavigate();
  const userId = 1;

  const [businessName, setBusinessName] = useState("");

  const [contactPersonFirstName,
    setContactPersonFirstName] = useState("");

  const [contactPersonLastName,
    setContactPersonLastName] = useState("");

  const [businessType,
    setBusinessType] = useState("");

  const [phoneNumber,
    setPhoneNumber] = useState("");

  const [address,
    setAddress] = useState("");

  const [city,
    setCity] = useState("");

  const [region,
    setRegion] = useState("");

  const [description,
    setDescription] = useState("");

    const fetchProfile = async () => {

  try {

    const response = await axios.get(
      `https://2.24.202.188/api/BusinessOwner/profile/${userId}`
    );

    setBusinessName(
      response.data.businessName || ""
    );

    setContactPersonFirstName(
      response.data.contactPersonFirstName || ""
    );

    setContactPersonLastName(
      response.data.contactPersonLastName || ""
    );

    setBusinessType(
      response.data.businessType || ""
    );

    setPhoneNumber(
      response.data.phoneNumber || ""
    );

    setAddress(
      response.data.address || ""
    );

    setCity(
      response.data.city || ""
    );

    setRegion(
      response.data.region || ""
    );

    setDescription(
      response.data.description || ""
    );

  } catch (error) {

    console.log(error);

  }

};

useEffect(() => {

  fetchProfile();

}, []);

const updateProfile = async () => {

  try {

    const response = await axios.post(
      "https://2.24.202.188/api/BusinessOwner/update-profile",
      {
        userId,
        businessName,
        contactPersonFirstName,
        contactPersonLastName,
        businessType,
        phoneNumber,
        address,
        city,
        region,
        description
      }
    );

    alert(response.data);

    fetchProfile();

  } catch (error) {

    alert("Error updating profile");

  }

};
return (

  <main className="min-h-screen bg-gray-100 p-10">

    <div className="max-w-6xl mx-auto">
        <button
  type="button"
  onClick={() => navigate("/business-dashboard")}
  className="bg-gray-700 text-white px-5 py-2 rounded-xl hover:bg-gray-800"
>
  Back to Dashboard
</button>

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        Business Profile
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="bg-white rounded-3xl shadow-md p-8">

          <h2 className="text-2xl font-bold mb-6">
            Business Information
          </h2>

          <input
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full border rounded-xl p-3 mb-4"
          />

          <input
            type="text"
            placeholder="Business Type"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full border rounded-xl p-3"
          />

        </div>

        <div className="bg-white rounded-3xl shadow-md p-8">

          <h2 className="text-2xl font-bold mb-6">
            Contact Person
          </h2>

          <input
            type="text"
            placeholder="First Name"
            value={contactPersonFirstName}
            onChange={(e) =>
              setContactPersonFirstName(e.target.value)
            }
            className="w-full border rounded-xl p-3 mb-4"
          />

          <input
            type="text"
            placeholder="Last Name"
            value={contactPersonLastName}
            onChange={(e) =>
              setContactPersonLastName(e.target.value)
            }
            className="w-full border rounded-xl p-3 mb-4"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) =>
              setPhoneNumber(e.target.value)
            }
            className="w-full border rounded-xl p-3"
          />

        </div>

        <div className="bg-white rounded-3xl shadow-md p-8">

          <h2 className="text-2xl font-bold mb-6">
            Location
          </h2>

          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) =>
              setAddress(e.target.value)
            }
            className="w-full border rounded-xl p-3 mb-4"
          />

          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) =>
              setCity(e.target.value)
            }
            className="w-full border rounded-xl p-3 mb-4"
          />

          <input
            type="text"
            placeholder="Region"
            value={region}
            onChange={(e) =>
              setRegion(e.target.value)
            }
            className="w-full border rounded-xl p-3"
          />

        </div>

        <div className="bg-white rounded-3xl shadow-md p-8">

          <h2 className="text-2xl font-bold mb-6">
            About Business
          </h2>

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="w-full border rounded-xl p-3 h-40"
            placeholder="Tell technicians about your business"
          />

        </div>

      </div>

      <div className="mt-8">

        <button
          onClick={updateProfile}
          className="w-full bg-green-700 text-white py-4 rounded-2xl font-semibold hover:bg-green-800 transition"
        >
          Update Business Profile
        </button>

      </div>

    </div>

  </main>

);

}

export default BusinessProfile;