import AskPrompt from "./AskInfo";

export default function Dashboard() {
  const scrollToPrompt = () => {
    const element = document.getElementById("ask-prompt-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" py-2 bg-white">
      <main className="px-6 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Learn Smarter with AI-Generated Questions
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Revise anything. Just enter a topic and start learning through
              AI-generated questions.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2" onClick={scrollToPrompt}>
              Start Revising
            </button>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">AI-Powered</h3>
              <p className="text-gray-600 text-sm">
                Questions generated using advanced AI technology
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">Any Topic</h3>
              <p className="text-gray-600 text-sm">
                Study any subject or topic you want to learn
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">Instant Results</h3>
              <p className="text-gray-600 text-sm">
                Get immediate feedback on your answers
              </p>
            </div>
          </div>

          {/* AskPrompt Section */}
          <section
            id="ask-prompt-section"
            className=" flex items-center justify-center px-6 bg-gray-50"
          >
            <div className="max-w-2xl h-[300px]  mx-auto w-full">
              <AskPrompt />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
