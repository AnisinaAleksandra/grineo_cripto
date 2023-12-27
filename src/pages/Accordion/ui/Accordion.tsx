import { useState } from "react";
import cls from "./Accordion.module.scss";
import slogan from "src/shared/assets/slogan.png";
const items: {
  id: number;
  isOpen: boolean;
  title: string;
  content: string;
}[] = [
  {
    id: 1,
    isOpen: false,
    title: "What is a Grineo card?",
    content:
      "Grineo is a virtual and/or physical debit card that is linked to a digital wallet within the Grineo app, allowing you to seamlessly pay in fiat money using your digital currencies.",
  },
  {
    id: 2,
    isOpen: false,
    title: "How to register with Grineo?",
    content: `Registration with Grineo is simple:
You need to be over the age of 18 and a resident of Australia
Download the Grineo App from either the Google Play Store or Apple App Store
Once installed, open the App and follow the simple steps to create an account
Complete a simple KYC (Know Your Customer) verification by confirming your identity`,
  },
  {
    id: 3,
    isOpen: false,
    title: "How to order the card?",
    content:
      "Order your Grineo card directly through the Grineo App. Once registered and logged in, simply click the ‘Order a Card’ button and follow the instructions.",
  },
  {
    id: 4,
    isOpen: false,
    title: "Can I order the card outside Australia?",
    content:
      "Currently, Grineo cards are only available in Australia and can only be delivered to an address within Australia. However, we are actively working on expanding our services to other regions. Please keep an eye on our website, app or our social channels for updates about our global availability.",
  },
  {
    id: 5,
    isOpen: false,
    title: "Do I need to be a resident of Australia to order a card?",
    content:
      "Yes, to order a Grineo card, you need to be a resident of Australia with a valid Australian address. We look forward to expanding our services globally in the future.",
  },
  {
    id: 6,
    isOpen: false,
    title: "How do I use the Grineo card?",
    content:
      "Using a Grineo card is just like using a standard debit card. After you've topped up your Grineo wallet with digital currency and connected it with a Grineo card, you can use it for purchases at any location that accepts debit card. The digital currency is converted to fiat money in real-time when you make a purchase.",
  },
  {
    id: 7,
    isOpen: false,
    title: "Can I deposit fiat money onto my Grineo card?",
    content:
      "Unfortunately, you can't top up your balance with fiat money at present time. But we will be adding this functionality in the future. Currently, you can top up your balance with USDC and USDT.",
  },
  {
    id: 8,
    isOpen: false,
    title: "How can I withdraw funds from the Grineo card?",
    content:
      "You can use your Grineo card to withdraw fiat money at any ATM that supports debit cards. Alternatively, you can also withdraw your digital currencies to any valid digital wallet address. Please note that withdrawal methods may be subject to fees and limits as outlined in our terms of service.",
  },
];
const Accordion = () => {
  const [itemsList, setItemsList] = useState(items);
  const handleClick = (id: number) => {
    setItemsList(
      (
        prev: { id: number; isOpen: boolean; title: string; content: string }[]
      ): { id: number; isOpen: boolean; title: string; content: string }[] => {
        const newArr: {
          id: number;
          isOpen: boolean;
          title: string;
          content: string;
        }[] = prev.map((el) => {
          if (el.id === id) el.isOpen = !el.isOpen;
          return el;
        });
        return newArr;
      }
    );
  };

  return (
    <div className={cls.accordion_part} id="accordion_part">
      <div className={cls.title_faq}>FAQ</div>
      <div className={cls.accordion}>
        {itemsList.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className={item.isOpen ? cls.accordion_open : cls.accordion_close}
            >
              <span>{item.id}</span>
              {item.title}
            </button>
            {item.isOpen && <p>{item.content}</p>}
          </div>
        ))}
      </div>
      <div className={cls.slogan}>
        <img src={slogan} alt="slogan" />
        <div className={cls.background_green}></div>
      </div>
    </div>
  );
};

export default Accordion;
