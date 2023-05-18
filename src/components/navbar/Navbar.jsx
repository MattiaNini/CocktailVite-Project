import styles from "./index.module.scss";

import Home from "../../pages/home/Home";

const Navbar = ({ setReservationVisibility }) => {
  const onHandleClick = () => setReservationVisibility(true);

  return (
    <div className={styles.navbar}>
      <h1 className={styles.title}> VITE LOUNGE COCKTAIL'S</h1>
      <img className={styles.logo} src="/img/Offlogo.png"></img>
    </div>
  );
};

export default Navbar;
