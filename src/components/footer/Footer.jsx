import styles from "./index.module.scss";
import tripadvisor from "../../../img/tripadvisor.png";
import instagram from "../../../img/instagram.png";
import google from "../../../img/google.png";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <img src={tripadvisor}></img>
      <img src={instagram}></img>
      <img src={google}></img>
      <h2>LA TUA RECENSIONE E' GRADITA!</h2>
    </div>
  );
};

export default Footer;
