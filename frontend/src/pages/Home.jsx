import FixinitTeam from '../assets/FixinitTeam.png'

function Home() {

  return (

    <main className="flex-1 bg-gray-100">

      <div className="px-16 py-20 flex items-center justify-between gap-16">

        {/* LEFT SIDE */}

        <div className="max-w-2xl">

          <h1 className="text-6xl font-bold text-gray-900 leading-tight">

            Fast Local IT Support

          </h1>

          <p className="text-xl text-gray-600 mt-6 leading-9">

            Connect instantly with verified nearby IT technicians
            for emergency and on-site business support.

          </p>

        </div>

        {/* RIGHT SIDE */}

        <img
          src={FixinitTeam}
          alt="Our IT Team"
          className="w-full max-w-lg rounded-2xl shadow-xl object-cover"
        />

      </div>

    </main>

  )

}

export default Home