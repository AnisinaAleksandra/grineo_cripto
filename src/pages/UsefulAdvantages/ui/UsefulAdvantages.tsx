import cls from "./UsefulAdvantages.module.scss";
// import arrowRing from "src/shared/assets/arrow_ring.png";

const UsefulAdvantages = () => {
  return (
    <div className={cls.useful_advantages} id="useful_advantages">
      <div className={cls.left_part}>
        <div className={cls.image_container}></div>
        <div className={cls.description}>
          <div className={cls.title}>Our card is 85% biodegradable</div>
          <div className={cls.text}>
            We are constantly making steps to minimize our impact on the
            environment and working on a more sustainable future.
          </div>
        </div>
      </div>
      <div className={cls.right_part}>
        <div className={cls.image_container}></div>
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
  );
};

export default UsefulAdvantages;
