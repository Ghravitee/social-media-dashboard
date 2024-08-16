/* eslint-disable react/prop-types */

const SocialMedia = ({ accounts, darkMode }) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:max-w-[70rem] px-6 gap-6 mt-6 -translate-y-16 mx-auto max-w-[20rem] sm:max-w-[50rem]`}
    >
      {accounts.map((account, index) => {
        const isGradientBorder = account.handle === "@realnathanf";
        const isYoutube = account.handle === "Nathan F";
        return (
          <div
            key={index}
            className={`px-4 py-6 flex flex-col gap-4 justify-center rounded-[5px] items-center ${
              darkMode
                ? "bg-Dark-Desaturated-Blue-Card-BG"
                : "bg-Light-Grayish-Blue-Card-BG"
            } hover:bg-[${
              darkMode ? "#333a56" : "#e1e3f0"
            }] hover:cursor-pointer`}
            style={{
              borderTopWidth: "4px",
              borderTopStyle: "solid",
              borderTopColor: isGradientBorder
                ? "transparent"
                : account.borderColor,
              borderImage: isGradientBorder
                ? "linear-gradient(to right, #fdc468, #df4996) 1 stretch"
                : "none",
            }}
          >
            <div className="flex items-center gap-2">
              <img src={account.icon} alt={account.handle} />
              <p
                className={`inter-400 ${
                  darkMode
                    ? "text-Desaturated-Blue-Text"
                    : "text-Dark-Grayish-Blue-Text"
                } `}
              >
                {account.handle}
              </p>
            </div>
            <div className="flex flex-col">
              <h1
                className={`text-[3rem] text-center ${
                  darkMode ? "text-white" : "text-Very-Dark-Blue-Text"
                } inter-700 leading-[1.5]`}
              >
                {account.followers}
              </h1>
              <p
                className={`uppercase  ${
                  darkMode
                    ? "text-Desaturated-Blue-Text"
                    : "text-Dark-Grayish-Blue-Text"
                } text-base text-center tracking-widest leading-[1]`}
              >
                {isYoutube ? "subscribers" : "followers"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={account.arrow} alt="" />
              <p
                className={`${
                  isYoutube ? "text-Bright-Red" : "text-Lime-Green"
                } text-sm inter-700`}
              >
                {account.addedFollowersNumber} Today
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMedia;
