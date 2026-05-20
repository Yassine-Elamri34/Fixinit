function BecomeTechnicians() {

  return (

    <div className="min-h-screen p-20">

      <h1 className="text-5xl font-bold leading-tight">

        Join the Fixinit Technician Network

      </h1>

      <p className="text-xl text-gray-600 mt-6 max-w-3xl leading-9">

        Become part of our growing platform and connect with local businesses
        looking for reliable IT support. Follow the steps below to create your
        technician profile and start receiving service requests.

      </p>
  
      <p>   you have an account ? </p>
       <div className="flex gap-3"> 

          <button className="px-5 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 hover:scale-105  transition">

            Log In

          </button>



          <button className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 hover:scale-105  transition">

            Sign Up

          </button>

        </div>

    </div>
    

  )

}

export default BecomeTechnicians