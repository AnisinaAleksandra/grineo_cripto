import cls from "./ChooseCardPage.module.scss";
import Cocoon from "src/shared/assets/card_purple.png";
import Morpho from "src/shared/assets/card1_green.png";
import Flutter from "src/shared/assets/card_black.png";
interface Card {
  id: string;
  nameCard: string;
  image: string;
  characteristicList: string[];
}
const ChooseCardPage = () => {
  const cards_list: Card[] = [
    {
      id: "null",
      nameCard: "",
      image: "",
      characteristicList: [
        "Card Type",
        "card issue & delivery fee",
        "monthly fee",
        "ATM daily",
        "Daily limits",
        "Referral Bonus",
      ],
    },
    {
      id: "Cocoon",
      nameCard: "Cocoon",
      image: Cocoon,
      characteristicList: ["Virtual", "$0", "$0", "-", "$1000", "$20"],
    },
    {
      id: "Morpho",
      nameCard: "Morpho",
      image: Morpho,
      characteristicList: [
        "Virtual",
        "$9.99",
        "$9.99",
        "$400",
        "$10 000",
        "$30",
      ],
    },
    {
      id: "Flutter",
      nameCard: "Flutter",
      image: Flutter,
      characteristicList: ["Virtual", "$9.99", "$0", "$200", "$3 000", "$20"],
    },
  ];
  return (
    <div className={cls.choose_card_page} id="choose_card_page">
      <div className={cls.title}>
        Choose Your card in the APP{" "}
        <svg
          width="66"
          height="66"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.4569 44.9758L34.1562 52.5905L36.9533 45.3563"
            stroke="#0E1010"
            stroke-width="0.67"
            stroke-miterlimit="10"
          />
          <path
            d="M31.3557 22.478L31.6564 14.8633L28.8594 22.1012"
            stroke="#0E1010"
            stroke-width="0.67"
            stroke-miterlimit="10"
          />
          <path
            d="M34.2634 52.1528C34.2748 52.0729 34.3205 51.5972 34.3319 51.5173C35.0702 46.1402 36.4097 41.4138 38.9327 38.8946C43.6438 34.1911 57.4348 33.5137 65 33.4757V32.5243C57.4348 32.4863 43.6438 31.8089 38.9327 27.1054C34.2139 22.3942 33.5099 8.58425 33.4757 1H32.5243C32.4863 8.58425 31.7861 22.3942 27.0673 27.1054C22.3562 31.8089 8.56523 32.4863 1 32.5243V33.4757C8.56523 33.5137 22.3562 34.1911 27.0673 38.8946C31.7861 43.6058 32.4901 57.4157 32.5243 65H33.4757"
            stroke="#0E1010"
            stroke-width="0.67"
            stroke-miterlimit="10"
          />
        </svg>
      </div>
      <div className={cls.content_container}>
        <div className={cls.choose_card_list}>
          {cards_list.map((card: Card) => (
            <div className={cls.card} key={card.id}>
              <div className={cls.image}>
                <img src={card.image} alt={`${card.image}`} />
              </div>
              <div className={cls.name}>{card.nameCard}</div>
              <div className={cls.card_charakteristics}>
                {card.characteristicList.map((characteristic, index) => (
                  <div
                    className={cls.characteristic}
                    key={`${characteristic}_${card.nameCard}_${index}`}
                  >
                    {characteristic}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={cls.text}>
          Online & Offline Payments, Apple Pay & Google Pay, PayPass
          <br />
          Bind your card to any payment system (netflix, amazon, spotify)
        </div>
        <div className={cls.preorder_container}>
          <div className={cls.text_left}>
            Preorder FREE <span>Grineo</span>
            <br />
            <span>VISA card</span> right now
          </div>
          <div className={cls.input_right}>
            <input placeholder="Email" />
            <button className={cls.button_preorder} type="submit">
              Preorder Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseCardPage;
