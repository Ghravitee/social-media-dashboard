/* eslint-disable react/prop-types */
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import arrowUp from "../images/icon-up.svg";
import arrowDown from "../images/icon-down.svg";

const Overview = ({ darkMode }) => {
  const overviews = [
    {
      title: "Page Views",
      quantity: "87",
      icon: facebook,
      arrow: arrowUp,
      rating: 3,
    },
    {
      title: "Likes",
      quantity: "52",
      icon: facebook,
      arrow: arrowDown,
      rating: 2,
    },
    {
      title: "Likes",
      quantity: "5462",
      icon: instagram,
      arrow: arrowUp,
      rating: 2257,
    },
    {
      title: "Profile Views",
      quantity: "52k",
      icon: instagram,
      arrow: arrowUp,
      rating: 1375,
    },
    {
      title: "Retweets",
      quantity: "117",
      icon: twitter,
      arrow: arrowUp,
      rating: 303,
    },
    {
      title: "Likes",
      quantity: "507",
      icon: twitter,
      arrow: arrowUp,
      rating: 553,
    },
    {
      title: "Likes",
      quantity: "107",
      icon: youtube,
      arrow: arrowDown,
      rating: 19,
    },
    {
      title: "Total Views",
      quantity: "1407",
      icon: youtube,
      arrow: arrowDown,
      rating: 12,
    },
  ];
  return (
    <div
      className={`mx-auto max-w-[20rem] sm:max-w-[50rem] px-6 lg:max-w-[70rem] -translate-y-8`}
    >
      <h2
        className={`text-[1.5rem] ${
          darkMode ? "text-white" : "text-Dark-Grayish-Blue-Text inter-700 mb-6"
        }`}
      >
        Overview - Today
      </h2>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 gap-6 mt-6`}
      >
        {overviews.map((overview, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col gap-5 justify-between px-6 py-6 rounded-[5px]  ${
                darkMode
                  ? "bg-Dark-Desaturated-Blue-Card-BG"
                  : "bg-Light-Grayish-Blue-Card-BG"
              } hover:bg-[${
                darkMode ? "#333a56" : "#e1e3f0"
              }] hover:cursor-pointer`}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={`text-[0.8rem] inter-700 ${
                    darkMode
                      ? "text-Desaturated-Blue-Text"
                      : "text-Dark-Grayish-Blue-Text"
                  } `}
                >
                  {overview.title}
                </h3>
                <img
                  src={overview.icon}
                  alt={overview.title}
                  width={15}
                  height={15}
                />
              </div>

              <div className="flex items-center justify-between">
                <h2
                  className={`text-[1.7rem] ${
                    darkMode ? "text-white" : "text-Very-Dark-Blue-Text"
                  } inter-700`}
                >
                  {overview.quantity}
                </h2>
                <div className="flex items-center gap-[2px]">
                  <img src={overview.arrow} alt="arrow up or down" />
                  <p
                    className={`${
                      overview.rating <= 19 && overview.arrow === arrowDown
                        ? "text-Bright-Red"
                        : "text-Lime-Green"
                    } text-sm inter-700`}
                  >
                    {overview.rating}%
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
