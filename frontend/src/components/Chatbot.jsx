import { useState, useEffect } from 'react'
import axios from "axios";




function Chatbot() {

  const [openChat, setOpenChat] = useState(false)

  const [messages, setMessages] = useState([
    {
      sender: 'AI',
      text: 'Hello 👋 How can Fixinit help you today?',
    },
  ])

  const [input, setInput] = useState('')

  // NEW: tracks extra offset (in px) to push the widget up so it
  // never overlaps the footer
  const [bottomOffset, setBottomOffset] = useState(24)

  useEffect(() => {

    function handleScrollOrResize() {

      const footer = document.querySelector('footer')

      if (!footer) return

      const footerRect = footer.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // How much of the footer is currently visible inside the viewport
      const visibleFooterHeight = viewportHeight - footerRect.top

      if (visibleFooterHeight > 0) {
        // Footer is intruding into the viewport -> push widget up
        // by that amount, plus the base 24px gap
        setBottomOffset(visibleFooterHeight + 24)
      } else {
        // Footer not visible yet -> default gap from bottom of screen
        setBottomOffset(24)
      }

    }

    handleScrollOrResize()

    window.addEventListener('scroll', handleScrollOrResize)
    window.addEventListener('resize', handleScrollOrResize)

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize)
      window.removeEventListener('resize', handleScrollOrResize)
    }

  }, [])

 const sendMessage = async () => {

  if (!input.trim()) return;

  const userMessage = {
    sender: "User",
    text: input,
  };

  setMessages((prev) => [...prev, userMessage]);

  const currentInput = input;

  setInput("");

  try {

    const response = await axios.post(
  "http://api.fixinit.ca:5000/api/Chatbot",
  {
    message: currentInput,
  }
);

    const aiMessage = {
      sender: "AI",
      text: response.data.reply,
    };

    setMessages((prev) => [...prev, aiMessage]);

  } catch (error) {

    console.log(error);

    const aiMessage = {
      sender: "AI",
      text: "Sorry, I couldn't connect to Fixinit AI.",
    };

    setMessages((prev) => [...prev, aiMessage]);
  }
};

  return (

    <div>

      {/* CHAT BUTTON */}

      <button
        onClick={() => setOpenChat(!openChat)}
        style={{ bottom: `${bottomOffset}px` }}
        className="fixed right-3 md:right-6 bg-[#041B4D] text-white w-16 h-16 rounded-2xl shadow-[0_10px_25px_-5px_rgba(4,27,77,0.5)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-6px_rgba(4,27,77,0.55)] active:scale-95 transition-all duration-200 z-50 flex items-center justify-center"
      >

        {openChat ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M6 6L18 18M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12.5C4 7.81 7.81 4 12.5 4S21 7.81 21 12.5 17.19 21 12.5 21c-1.27 0-2.47-.27-3.55-.76L4 21l1.36-4.4A8.46 8.46 0 0 1 4 12.5Z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#041B4D]" />
          </>
        )}

      </button>

      {/* CHAT WINDOW */}

      {openChat && (

        <div
          style={{ bottom: `${bottomOffset + 76}px` }}
          className="fixed right-3 md:right-6 w-[calc(100vw-24px)] max-w-[350px] h-[420px] bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(4,27,77,0.35)] border border-gray-100 flex flex-col overflow-hidden z-50"
        >

          {/* HEADER */}

          <div className="bg-gradient-to-br from-[#0A2666] to-[#041B4D] text-white px-5 py-4 flex items-center gap-3">

            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-sm font-semibold tracking-tight">
              Fx
            </div>

            <div className="flex-1 min-w-0">
              <h2 className="text-[15px] font-semibold leading-tight">

                Fixinit Support

              </h2>

              <p className="text-xs text-blue-200/80 mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Online now

              </p>
            </div>

          </div>

          {/* MESSAGES */}

          <div className="flex-1 overflow-y-auto px-4 py-4 bg-[#FAFAF8] space-y-3">

            {messages.map((message, index) => (

              <div
                key={index}
                className={`flex items-end gap-2 ${
                  message.sender === 'User'
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >

                {message.sender !== 'User' && (
                  <div className="w-6 h-6 rounded-full bg-[#041B4D] text-white text-[10px] font-semibold flex items-center justify-center flex-shrink-0 mb-0.5">
                    Fx
                  </div>
                )}

                <div
                  className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-[13.5px] leading-relaxed ${
                    message.sender === 'User'
                      ? 'bg-[#041B4D] text-white rounded-br-md'
                      : 'bg-white border border-gray-200/80 text-gray-800 rounded-bl-md shadow-sm'
                  }`}
                >

                  {message.text}

                </div>

              </div>

            ))}

          </div>

          {/* INPUT */}

          <div className="p-3 border-t border-gray-100 bg-white flex items-center gap-2">

            <input
              type="text"
              placeholder="Describe your IT issue..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1 border border-gray-200 bg-gray-50 rounded-xl px-3.5 py-2.5 text-[13.5px] outline-none focus:border-[#041B4D]/40 focus:bg-white focus:ring-2 focus:ring-[#041B4D]/10 transition-colors"
            />

            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="bg-[#041B4D] disabled:bg-gray-300 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-[#0A2666] active:scale-95 transition-all flex-shrink-0"
            >

              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3.5 12L20.5 4L13.5 21L11 13.5L3.5 12Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>

            </button>

          </div>

        </div>

      )}

    </div>

  )

}

export default Chatbot
