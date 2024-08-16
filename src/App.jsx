import { useState } from "react";
import facebook from "../src/images/icon-facebook.svg";
import arrowUp from "../src/images/icon-up.svg";
import arrowDown from "../src/images/icon-down.svg";
import twitter from "../src/images/icon-twitter.svg";
import instagram from "../src/images/icon-instagram.svg";
import youtube from "../src/images/icon-youtube.svg";
import SocialMedia from "./components/SocialMedia";
import Overview from "./components/Overview";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleBilling = () => {
    setDarkMode((prev) => !prev);
  };
  const accounts = [
    {
      icon: facebook,
      handle: "@nathanf",
      followers: "1987",
      addedFollowers: true,
      addedFollowersNumber: "12",
      arrow: arrowUp,
      borderColor: "#198ff5",
    },
    {
      icon: twitter,
      handle: "@nathanf",
      followers: "1044",
      addedFollowers: true,
      addedFollowersNumber: "99",
      arrow: arrowUp,
      borderColor: "#1ca0f2",
    },
    {
      icon: instagram,
      handle: "@realnathanf",
      addedFollowers: true,
      followers: "11K",
      addedFollowersNumber: "1099",
      arrow: arrowUp,
      borderColor: "bg-gradient-to-tr from-[#fdc468] to-[#df4996]",
    },
    {
      icon: youtube,
      handle: "Nathan F",
      followers: "8239",
      addedFollowers: false,
      addedFollowersNumber: "144",
      arrow: arrowDown,
      borderColor: "#c4032a",
    },
  ];

  return (
    <main
      className={`relative  ${
        darkMode ? "bg-Very-Dark-Blue-BG" : "bg-White-BG"
      } pb-10`}
    >
      <div
        className={`${
          darkMode
            ? "bg-Very-Dark-Blue-Top-BG-Pattern"
            : "bg-Very-Pale-Blue-Top-BG-Pattern"
        } pt-10 pb-20 rounded-b-[3rem] px-6 flex flex-col lg:flex-row justify-between xl:px-40 2xl:px-[12.5rem]`}
      >
        <div className="flex flex-col items-start">
          <h1
            className={`${
              darkMode ? "text-white" : "text-Very-Dark-Blue-Text"
            } text-[1.7rem] inter-700 mb-2`}
          >
            Social Media Dashboard
          </h1>
          <h2
            className={`${
              darkMode
                ? "text-Desaturated-Blue-Text"
                : "text-Dark-Grayish-Blue-Text"
            } text-[1rem] inter-700 mb-4`}
          >
            Total Followers: 23,004
          </h2>
        </div>
        <hr
          className={`${
            darkMode ? "bg-Dark-Grayish-Blue-Text" : "bg-Dark-Grayish-Blue-Text"
          } w-full h-[1px] lg:hidden`}
        />
        <form className="flex justify-between items-center mt-4 lg:mt-0 gap-4">
          <label
            className={`${
              darkMode
                ? "text-Desaturated-Blue-Text"
                : "text-Dark-Grayish-Blue-Text"
            } inter-700`}
          >
            {darkMode ? "Dark Mode" : "Light Mode"}
          </label>
          <div
            onClick={toggleBilling}
            className={`flex justify-start cursor-pointer items-center h-5 ${
              darkMode
                ? "bg-gradient-to-tr from-[#378fe6] to-[#3eda82]"
                : "bg-Toggle-Light"
            }  relative w-10 rounded-full select-none hover:bg-gradient-to-tr from-[#378fe6] to-[#3eda82]`}
          >
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              checked={darkMode}
              onChange={toggleBilling}
              className={`absolute block w-4 h-4 ml-1 rounded-full bg-white bg- border appearance-none cursor-pointer transition-transform duration-300 ease-in-out ${
                darkMode ? "transform translate-x-0" : "transform translate-x-4"
              }`}
            />
          </div>
        </form>
      </div>

      <SocialMedia accounts={accounts} darkMode={darkMode} />
      <Overview darkMode={darkMode} />
    </main>
  );
}

export default App;
