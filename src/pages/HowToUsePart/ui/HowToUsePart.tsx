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
    </div>
  );
};

export default HowToUsePart;
