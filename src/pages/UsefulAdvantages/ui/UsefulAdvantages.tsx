import cls from "./UsefulAdvantages.module.scss";
import visa_card from "src/shared/assets/card_green_visa.png";
import australia_map from "src/shared/assets/australia.png";
import arrow_loading from "src/shared/assets/arrow_loading.png";
import grineo_girl_arrow from "src/shared/assets/grineo_girl_arrow.png";
import arrow_ring from "src/shared/assets/arrow_ring.png";
const UsefulAdvantages = () => {
  return (
    <div className={cls.useful_advantages} id="useful_advantages">
      <div className={cls.useful_advantages_card_and_map}>
        <div className={cls.left_part}>
          <div className={cls.image_container}>
            <img src={visa_card} alt="australia_map" />
          </div>
          <div className={cls.description}>
            <div className={cls.title}>Our card is 85% biodegradable</div>
            <div className={cls.text}>
              We are constantly making steps to minimize our impact on the
              environment and working on a more sustainable future.
            </div>
          </div>
        </div>
        <div className={cls.right_part}>
          <div className={cls.image_container}>
            <img src={australia_map} alt="australia_map" />
          </div>
          <div className={cls.description}>
            <div className={cls.title}>
              Our mission is to care for the ecology of the world and Australia.
            </div>
            <div className={cls.text}>
              We support green energy and green mining. We donate funds to green
              companies in Australia so that the adoption of cryptocurrencies
              occurs in a green way.
            </div>
          </div>
        </div>
      </div>

      <div className={cls.content_container}>
        <div className={cls.title}>
          <span className={cls.title_first_line}>
            Convert Crypto to Fiat{" "}
            <img src={arrow_ring} alt="arrow_ring" id={cls.arrow_ring} />
          </span>
          <br />
          <img src={arrow_loading} alt="arrow_loading" id={cls.arrow_loading} />
          in moment
        </div>
        <div className={cls.content_info}>
          <div className={cls.description_text}>
            <div className={cls.title_of_description}>
              Funds are converted in real time at the current rate and credited
              to a fiat wallet which is linked to a bank card.
            </div>
            <div className={cls.list_info}>
              <ul>
                <li>
                  <div className={cls.svg}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 17.0601H12"
                        stroke="#BFEA81"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.21997 13.5H9.78003C11.56 13.5 12 13.94 12 15.7V19.81C12 21.57 11.56 22.01 9.78003 22.01H4.21997C2.43997 22.01 2 21.57 2 19.81V15.7C2 13.94 2.43997 13.5 4.21997 13.5Z"
                        stroke="#BFEA81"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
                        stroke="#BFEA81"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
                        stroke="#BFEA81"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.5 11C20.9853 11 23 8.98528 23 6.5C23 4.01472 20.9853 2 18.5 2C16.0147 2 14 4.01472 14 6.5C14 8.98528 16.0147 11 18.5 11Z"
                        stroke="#BFEA81"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className={cls.text}>
                    Crypto is accepted everywhere in any store which VISA card
                    accepted
                  </div>
                </li>
                <li>
                  <div className={cls.svg}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 8C2.45 8 2 7.55 2 7C2 6.45 2.45 6 3 6H5.54C5.19 6.6 5 7.29 5 8H3ZM5 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11H5V13ZM1 18C0.448 18 0 17.55 0 17C0 16.45 0.448 16 1 16H5C5 16.71 5.19 17.4 5.54 18H1ZM21 6H9C7.89 6 7 6.89 7 8V16C7 17.11 7.89 18 9 18H21C22.11 18 23 17.11 23 16V8C23 6.89 22.11 6 21 6ZM21 12H9V9H21V12Z"
                        fill="#BFEA81"
                      />
                    </svg>
                  </div>
                  <div className={cls.text}>
                    Very fast & easy process to convert crypto to fiat just in
                    seconds
                  </div>
                </li>
                <li>
                  <div className={cls.svg}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.7525 6.80647L19.4758 6.89647L18.0025 7.02647L17.5792 7.69314L17.2758 7.59647L16.0792 6.53314L15.9058 5.9798L15.6692 5.38647L14.9258 4.7198L14.0492 4.5498L14.0292 4.9498L14.8892 5.7898L15.3092 6.28314L14.8358 6.53314L14.4525 6.4198L13.8758 6.17647V5.71314L13.1425 5.3998L12.8925 6.49647L12.1292 6.66647L12.2058 7.2798L13.2058 7.4698L13.3792 6.49314L14.1992 6.61647L14.5792 6.8398H15.1925L15.6025 7.66647L16.7158 8.79314L16.6325 9.23314L15.7358 9.11981L14.1892 9.89981L13.0758 11.2331L12.9325 11.8265H12.5292L11.7858 11.4931L11.0625 11.8265L11.2425 12.5898L11.5558 12.2265H12.1125L12.0725 12.8931L12.5325 13.0265L13.0025 13.5565L13.7358 13.3331L14.5925 13.4665L15.5925 13.7331L16.0858 13.7931L16.9258 14.7465L18.5492 15.6998L17.4992 17.6998L16.3925 18.2131L15.9725 19.3598L14.3692 20.4298L14.1992 21.0465C15.6558 20.6906 17.0053 19.989 18.1334 19.001C19.2614 18.0131 20.1348 16.7679 20.6796 15.3709C21.2244 13.9738 21.4246 12.4661 21.2632 10.9753C21.1019 9.48452 20.5837 8.05455 19.7525 6.80647Z"
                        fill="#BFEA81"
                      />
                      <path
                        d="M13.0742 16.8766L12.4075 15.6166L13.0175 14.3332L12.3942 14.1466L11.6942 13.4432L10.1408 13.1099L9.62752 11.9999V12.6399H9.40085L8.06752 10.8266V9.33324L7.08752 7.7399L5.53085 8.01657H4.47752L3.94752 7.68324L4.61418 7.1499L3.94752 7.30324C3.12212 8.72068 2.68484 10.3306 2.67973 11.9709C2.67463 13.6111 3.10187 15.2237 3.91843 16.6463C4.73498 18.0688 5.91201 19.2511 7.33095 20.0739C8.74988 20.8967 10.3606 21.3311 12.0008 21.3332C12.3922 21.3292 12.7829 21.3013 13.1708 21.2499L13.0742 20.1199C13.0742 20.1199 13.5042 18.4532 13.5042 18.3866C13.5042 18.3199 13.0742 16.8766 13.0742 16.8766Z"
                        fill="#BFEA81"
                      />
                      <path
                        d="M6.13813 5.66676L7.80479 5.43343L8.56813 5.01677L9.42812 5.26343L10.8015 5.18677L11.2748 4.44677L11.9581 4.5601L13.6248 4.40343L14.0848 3.89677L14.7515 3.46677L15.6648 3.60343L15.9981 3.55343C14.1243 2.66519 12.0075 2.42845 9.98375 2.88078C7.96003 3.33311 6.14543 4.4486 4.82812 6.0501L6.13813 5.66676ZM12.3948 3.59343L13.3348 3.0701L13.9481 3.42343L13.0615 4.0901L12.2148 4.17677L11.8348 3.9301L12.3948 3.59343ZM9.57146 3.66677L10.0015 3.84677L10.5448 3.66677L10.8448 4.18677L9.57146 4.5201L8.96146 4.16677C8.96146 4.16677 9.55812 3.78343 9.57146 3.66677Z"
                        fill="#BFEA81"
                      />
                    </svg>
                  </div>
                  <div className={cls.text}>
                    Use Crypto payment everywhere in the world even in countries
                    with regional restrictions
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={cls.image_container}>
            <img src={grineo_girl_arrow} alt="grineo_girl_arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsefulAdvantages;
