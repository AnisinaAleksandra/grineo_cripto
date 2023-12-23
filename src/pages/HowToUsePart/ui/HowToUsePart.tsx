import cls from "./HowToUsePart.module.scss";
import arrowTitle from "src/shared/assets/arroTitle.png";

const HowToUsePart = () => {
  const stepsToUseApp = [
    {
      id: 1,
      title: "Install APP - 1 min",
      text: "Download the APP from AppStore or Google Play",
    },
    {
      id: 2,
      title: "Registration - 3 min",
      text: "Put your full name, email and phone",
    },
    {
      id: 3,
      title: "Top Up Crypto - 3 min",
      text: "make the deposit from preferable token / chain",
    },
    {
      id: 4,
      title: "KYC - 15 min",
      text: "lighting fast and easy KYC process, just make selfie, upload passport and viola",
    },
    {
      id: 5,
      title: "Order card - 10 min",
      text: "and virtual card in your APP, 2-7 days and you will get plastic real card",
    },
    {
      id: 6,
      title: "Pay",
      text: "and be happy and safe about your funds",
    },
  ];
  return (
    <div className={cls.how_to_use_part} id="how_to_use_part">
      <div className={cls.title}>
        how to use
        <img src={arrowTitle} alt="arrowTitle" />
        <span>30 min and Crypto card in your pocket</span>
      </div>
      <div className={cls.content_container}>
        {stepsToUseApp.map((step) => (
          <div className={cls.step_container} key={step.id}>
            <div className={cls.number}>{step.id}</div>
            <div className={cls.title_step}>{step.title}</div>
            <div className={cls.text}>{step.text}</div>
          </div>
        ))}
      </div>
      <div className={cls.content_container_bottom}>
        <div className={cls.left_container}>
          <svg
            width="236"
            height="188"
            viewBox="0 0 236 188"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M130.768 145.429L146.378 156.899L135.438 140.939"
              stroke="#0F0F0F"
              stroke-width="0.67"
              stroke-miterlimit="10"
            />
            <path
              d="M146.288 34.6694L136.608 51.2494L151.718 38.2294"
              stroke="#0F0F0F"
              stroke-width="0.67"
              stroke-miterlimit="10"
            />
            <path
              d="M101.048 46.3897L84.8376 35.7397L95.2277 52.4197"
              stroke="#0F0F0F"
              stroke-width="0.67"
              stroke-miterlimit="10"
            />
            <path
              d="M197.94 97.6251C218.516 68.1412 221.079 34.388 203.665 22.2352C186.251 10.0824 155.454 24.1322 134.878 53.6161C114.302 83.1 111.739 116.853 129.153 129.006C146.567 141.159 177.364 127.109 197.94 97.6251Z"
              stroke="#0F0F0F"
              stroke-width="0.67"
              stroke-miterlimit="10"
            />
            <path
              d="M194.922 167.531C208.796 156.248 204.557 128.059 185.455 104.57C166.352 81.081 139.619 71.1862 125.745 82.4694C111.871 93.7526 116.11 121.941 135.212 145.43C154.315 168.919 181.048 178.814 194.922 167.531Z"
              stroke="#0F0F0F"
              stroke-width="0.67"
              stroke-miterlimit="10"
            />
            <path
              d="M106.043 128.775C123.457 116.622 120.894 82.8691 100.318 53.3851C79.7421 23.9012 48.9451 9.85153 31.531 22.0043C14.1169 34.157 16.6801 67.9102 37.256 97.3942C57.8319 126.878 88.6289 140.928 106.043 128.775Z"
              stroke="#0F0F0F"
              stroke-width="0.67"
              stroke-miterlimit="10"
            />
            <path
              d="M99.9465 145.343C119.049 121.854 123.288 93.6653 109.414 82.3821C95.5396 71.0989 68.8067 80.9938 49.704 104.483C30.6013 127.972 26.3626 156.161 40.2367 167.444C54.1108 178.727 80.8438 168.832 99.9465 145.343Z"
              stroke="#0F0F0F"
              stroke-width="0.67"
              stroke-miterlimit="10"
            />
            <path
              d="M96.9078 154.58L104.408 139.45L89.4878 149.83"
              stroke="#0F0F0F"
              stroke-width="0.67"
              stroke-miterlimit="10"
            />
          </svg>

          <div className={cls.text_container}>
            Live as you want and spend what you want on whatever you want
          </div>
        </div>
        <div className={cls.right_container}></div>
      </div>
    </div>
  );
};

export default HowToUsePart;
