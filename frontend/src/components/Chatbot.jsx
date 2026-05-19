import { useState, useEffect } from 'react'

function Chatbot() {

  const [openChat, setOpenChat] = useState(false)

  const [bottomOffset, setBottomOffset] = useState(24)

  const [messages, setMessages] = useState([
    {
      sender: 'AI',
      text: 'Hello 👋 How can Fixinit help you today?',
    },
  ])

  const [input, setInput] = useState('')



  useEffect(() => {

    const updateOffset = () => {

      const footer = document.querySelector('footer')

      if (!footer) return

      const footerRect = footer.getBoundingClientRect()

      const windowHeight = window.innerHeight

      const footerVisibleHeight = windowHeight - footerRect.top



      if (footerVisibleHeight > 0) {

        setBottomOffset(footerVisibleHeight + 16)

      } else {

        setBottomOffset(24)

      }

    }



    window.addEventListener('scroll', updateOffset)

    window.addEventListener('resize', updateOffset)



    updateOffset()



    return () => {

      window.removeEventListener('scroll', updateOffset)

      window.removeEventListener('resize', updateOffset)

    }

  }, [])



  function sendMessage() {

    if (input.trim() === '') return



    const userMessage = {
      sender: 'User',
      text: input,
    }



    let aiResponse = {
      sender: 'AI',
      text: 'A Fixinit technician will assist you shortly.',
    }



    if (input.toLowerCase().includes('pos')) {

      aiResponse.text =
        'This seems to be a POS issue. Emergency support is recommended.'

    }



    if (input.toLowerCase().includes('internet')) {

      aiResponse.text =
        'Please check your router connection before requesting support.'

    }



    setMessages((prev) => [
      ...prev,
      userMessage,
      aiResponse,
    ])



    setInput('')

  }



  return (

    <div>


      {/* CHAT BUTTON */}

      <button
        onClick={() => setOpenChat(!openChat)}
        style={{ bottom: `${bottomOffset}px` }}
        className="fixed right-6 bg-[#041B4D] text-white w-16 h-16 rounded-full shadow-lg hover:scale-105 transition z-50 text-2xl"
      >

        {openChat ? '×' : '💬'}

      </button>



      {/* CHAT WINDOW */}

      {openChat && (

        <div
          style={{ bottom: `${bottomOffset + 80}px` }}
          className="fixed right-6 w-[350px] h-[390px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden z-50"
        >


          {/* HEADER */}

          <div className="bg-[#041B4D] text-white p-5">

            <h2 className="text-xl font-bold">

              Fixinit Support

            </h2>

            <p className="text-sm text-blue-200 mt-1">

              24/7 IT Assistance

            </p>

          </div>



          {/* MESSAGES */}

          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">

            {messages.map((message, index) => (

              <div
                key={index}
                className={`flex ${
                  message.sender === 'User'
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >

                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                    message.sender === 'User'
                      ? 'bg-[#041B4D] text-white rounded-br-sm'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-sm'
                  }`}
                >

                  {message.text}

                </div>

              </div>

            ))}

          </div>



          {/* INPUT */}

          <div className="p-4 border-t border-gray-200 bg-white flex items-center gap-2">

            <input
              type="text"
              placeholder="Describe your IT issue..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />



            <button
              onClick={sendMessage}
              className="bg-[#041B4D] text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
            >

              Send

            </button>

          </div>

        </div>

      )}

    </div>

  )

}

export default Chatbot