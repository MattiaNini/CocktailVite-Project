import { Link } from "react-router-dom";
import Menu from "../menu/Menu";

import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <img className={styles.bg} src="../../img/homebg.png"></img>

      <section className={styles.intro}>
        <h1 className={styles.title}>VITE LOUNGE COCKTAIL'S</h1>
        <h4 className={styles.titledescription}>
          Vite Lounge Cocktail's è un ambiente nato e pensato per ritagliarsi un
          piccolo spazio di piacere e leggerezza personale.
        </h4>
        <h4 className={styles.titledescriptiontwo}>
          Le nostre prelibatezze, sono state accuratamente selezionate per voi.{" "}
        </h4>
        <Link to="/menu" element={<Menu />} className={styles.fakebtn}>
          SCOPRI IL NOSTRO MENU'
        </Link>
      </section>
    </div>
  );
};

export default Home;
