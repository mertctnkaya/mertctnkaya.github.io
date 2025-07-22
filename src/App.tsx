import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          <img
            className="size-12 shrink-0"
            src="/img/logo.svg"
            alt="ChitChat Logo"
          />
          <div>
            <div className="text-xl font-medium text-black dark:text-white">
              ChitChat
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              You have a new message!
            </p>
          </div>
        </div>
        <h1 className="text-red-500 text-3xl font-bold">m3rt</h1>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCount((count) => count + 1)}
          >
            asDAS {count}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
