export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-black text-white dark:bg-black dark:text-white">
      
      <main  className="py-8 mt-20 relative bg-black dark:bg-black">
        <div className="max-w-7xl  mx-auto px-6 sm:px-8">
          <h1  className="text-3xl border-b border-b-blue-400  px-3 py-2  font-bold text-center sm:text-left mb-6 text-white">
            CodeQuery
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-lg">
                <h2 className="text-xl font-semibold text-white transition duration-200 ease-in-out hover:text-blue-400">
                  How to use React hooks effectively?
                </h2>
                <p className="text-gray-300 dark:text-gray-300 transition duration-200 ease-in-out hover:text-gray-100">
                  I&apos;m struggling to figure out how to use hooks correctly. Can someone explain?
                </p>
                <div className="mt-4 flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>Asked 3 hours ago</span>
                  <span>by John Doe</span>
                  <span>2 answers</span>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-md dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-lg">
                <h2 className="text-xl font-semibold text-white transition duration-200 ease-in-out hover:text-blue-400">
                  What is Tailwind CSS?
                </h2>
                <p className="text-gray-300 dark:text-gray-300 transition duration-200 ease-in-out hover:text-gray-100">
                  Can someone explain the benefits of using Tailwind CSS in a React project?
                </p>
                <div className="mt-4 flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>Asked 1 day ago</span>
                  <span>by Jane Smith</span>
                  <span>5 answers</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-lg">
                <h2 className="text-xl font-semibold text-white transition duration-200 ease-in-out hover:text-blue-400">
                  Popular Tags
                </h2>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-blue-700 text-blue-100 px-3 py-1 rounded-full text-sm transition duration-200 ease-in-out hover:bg-blue-600">
                    React
                  </span>
                  <span className="bg-green-700 text-green-100 px-3 py-1 rounded-full text-sm transition duration-200 ease-in-out hover:bg-green-600">
                    JavaScript
                  </span>
                  <span className="bg-yellow-700 text-yellow-100 px-3 py-1 rounded-full text-sm transition duration-200 ease-in-out hover:bg-yellow-600">
                    Tailwind CSS
                  </span>
                  <span className="bg-red-700 text-red-100 px-3 py-1 rounded-full text-sm transition duration-200 ease-in-out hover:bg-red-600">
                    Next.js
                  </span>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-md dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-lg">
                <h2 className="text-xl font-semibold text-white transition duration-200 ease-in-out hover:text-blue-400">
                  Ask a Question
                </h2>
                <textarea className="w-full p-4 mt-4 border border-gray-600 dark:bg-gray-700 dark:text-white text-white rounded-md transition duration-200 ease-in-out hover:border-gray-500" rows={5} placeholder="What do you need help with?"></textarea>
                <button className="mt-4 w-full bg-gray-600 hover:bg-gray-500  text-white py-2 rounded-lg  transition-colors transform hover:scale-105">
                  Ask Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}