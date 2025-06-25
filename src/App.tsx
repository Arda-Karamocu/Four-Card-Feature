function App() {
  return (
    <>
      <div className="lg:px-32 lg:py-9 px-4 py-7">
        <div className="flex flex-col items-center">
          <div>
            <h1 className="font-[300] text-3xl text-center text-gray-500">
              Reliable, efficient delivery
            </h1>
            <h1 className="font-[500] text-3xl text-gray-600 text-center">
              Powered by Technology
            </h1>
          </div>
          <p className="mt-5 text-center lg:max-w-xl text-gray-500">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          {/* Left Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-cyan-500 lg:my-32">
            <h2 className="text-xl text-gray-600 font-[700] mb-2">
              Supervisor
            </h2>
            <p className="text-gray-500 mb-4">
              Monitors activity to identify project roadblocks
            </p>
            <img
              src="src/images/icon-supervisor.svg"
              alt="Supervisor Icon"
              className="ml-auto mb-4"
            />
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-red-500">
              <h2 className="text-xl text-gray-600 font-[700] mb-2">
                Team Builder
              </h2>
              <p className="text-gray-500 mb-4">
                Scans our talent network to create the optimal team for your
                project
              </p>
              <img
                src="src/images/icon-team-builder.svg"
                alt="Team Icon"
                className="ml-auto mb-4"
              />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-yellow-500">
              <h2 className="text-xl text-gray-600 font-[700] mb-2">Karma</h2>
              <p className="text-gray-500 mb-4">
                Regularly evaluates our talent to ensure quality
              </p>
              <img
                src="src/images/icon-karma.svg"
                alt="Karma Icon"
                className="ml-auto mb-4"
              />
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-indigo-500 lg:my-32">
            <h2 className="text-xl text-gray-600 font-[700] mb-2">
              Calculator
            </h2>
            <p className="text-gray-500 mb-4">
              Uses data from past projects to provide better estimates
            </p>
            <img
              src="src/images/icon-calculator.svg"
              alt="Calculator Icon"
              className="ml-auto mb-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
