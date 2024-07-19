import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";

const symbol = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "%",
  "/",
  ".",
  "=",
  "C",
];
function App() {
  const [buttons, setButtons] = useState(symbol);
  const [input, setinput] = useState("");
  const [date, setDate] = useState("");

  const handleButton = (button) => {
    if (button === "C") {
      setinput("");
    } else if (button === "=") {
      const evaluate = eval(input);
      setinput(evaluate);
    } else {
      let result = input + button;
      setinput(result);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const updatedDate = now.toLocaleDateString();
      const updatedTime = now.toLocaleTimeString();
      setDate(`${updatedDate} - ${updatedTime}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gray-300 lg:h-[91.5vh]">
        <div className="max-w-screen-lg mx-auto h-[90%]">
          <h1 className="text-2xl text-center font-bold pt-12">
            My Own Calculator
          </h1>
          <h3 className="text-center font-bold py-3">{date}</h3>

          <div className="flex items-center flex-col py-6 max-w-[300px] mx-auto">
            <input
              type="text"
              placeholder="Enter the number"
              className="w-full p-2 ring-1 outline-none rounded-md"
              value={input}
              onChange={(e) => setinput(e.target.value)}
            />

            <div className="flex gap-2 w-full justify-center items-center flex-wrap my-5">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className="px-4 py-2 text-xl bg-black text-white rounded-md shadow-sm"
                  onClick={() => handleButton(button)}
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
