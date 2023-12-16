import cls from "./PayPage.module.scss";
import cardMobile from "src/shared/assets/card_mobile.png";
import ellipse from "src/shared/assets/Ellipse_pay_part.png";
import card_left from "src/shared/assets/card_left.png";
import card_right from "src/shared/assets/iconFromCardRight.svg";
import Frame from "src/shared/assets/Frame.png";
import arroTitle from "src/shared/assets/arroTitle.png";
const PayPage = () => {
  const majorCoins: { id: number; name: string }[] = [
    {
      id: 1,
      name: "BTC",
    },
    {
      id: 2,
      name: "ETH",
    },
    {
      id: 3,
      name: "USDC",
    },
    {
      id: 4,
      name: "USDT",
    },
    {
      id: 5,
      name: "BUSD",
    },
    {
      id: 6,
      name: "TRX",
    },
  ];
  return (
    <div className={cls.pay_page} id="pay_page">
      <div className={cls.title}>
        Pay With Crypto
        <br />
        <span>Everywhere In The World</span>
        <svg
          width="62"
          height="60"
          viewBox="0 0 62 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.3034 15.541C39.3862 14.8438 40.3979 14.8438 40.4807 15.541L41.1747 21.39C42.0708 28.9426 48.0255 34.8973 55.5781 35.7934L61.4271 36.4875C62.1244 36.5703 62.1244 37.582 61.4271 37.6648L55.5781 38.3588C48.0255 39.2549 42.0708 45.2096 41.1747 52.7622L40.4807 58.6112C40.3979 59.3085 39.3862 59.3085 39.3034 58.6112L38.6094 52.7622C37.7132 45.2096 31.7585 39.2549 24.2059 38.3588L18.3569 37.6648C17.6597 37.582 17.6597 36.5703 18.3569 36.4875L24.2059 35.7934C31.7585 34.8973 37.7132 28.9426 38.6094 21.39L39.3034 15.541Z"
            fill="url(#paint0_linear_127_64)"
          />
          <path
            d="M11.4199 0.278144C11.4639 -0.0927147 12.0021 -0.0927147 12.0461 0.278144L12.4153 3.38931C12.8919 7.40668 16.0593 10.5741 20.0766 11.0507L23.1878 11.4199C23.5587 11.4639 23.5587 12.0021 23.1878 12.0461L20.0766 12.4153C16.0593 12.8919 12.8919 16.0593 12.4153 20.0766L12.0461 23.1878C12.0021 23.5587 11.4639 23.5587 11.4199 23.1878L11.0507 20.0766C10.5741 16.0593 7.40668 12.8919 3.38931 12.4153L0.278144 12.0461C-0.0927147 12.0021 -0.0927147 11.4639 0.278144 11.4199L3.38931 11.0507C7.40668 10.5741 10.5741 7.40668 11.0507 3.38931L11.4199 0.278144Z"
            fill="url(#paint1_linear_127_64)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_127_64"
              x1="54.8748"
              y1="52.0589"
              x2="17.834"
              y2="-20.358"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BFEA81" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_127_64"
              x1="19.7026"
              y1="19.7026"
              x2="2.53197e-07"
              y2="-18.8171"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BFEA81" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={cls.content_container}>
        <div className={cls.pay_page_left_side}>
          <img src={cardMobile} alt="cardMobile" />
          <img src={ellipse} alt="ellipse" id={cls.ellipse} />
          <img src={Frame} alt="Frame" />
        </div>
        <div className={cls.pay_page_right_side}>
          <div className={cls.title_second_version}>All Major Coins</div>
          <div className={cls.major_coins_list}>
            {majorCoins.map((coin) => (
              <div className={cls.major_coins_list_item} key={coin.id}>
                {coin.name}
              </div>
            ))}
          </div>
          <button className={cls.button}>Download App</button>
        </div>
      </div>
      <div className={cls.title} id={cls.ellipse_container}>
        One App
        <img src={arroTitle} alt="arroTitle" />
        <br />
        <span>Everything You Need</span>
      </div>
      <div className={cls.content_container}>
        <div className={cls.card_container}>
          <div className={cls.title_of_container}>
            <span>2 Wallets - Crypto and Fiat</span>
            <span>Top up your crypto wallet</span>
          </div>
          <img src={card_left} alt="card_left" />
        </div>
        <div className={cls.card_container}>
          <img src={card_right} alt="card_right" />
          <div className={cls.title_of_container} id={cls.right_card}>
            <span>VISA card issued in the Grineo APP</span>
            <span>Pay everywhere with crypto</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayPage;
