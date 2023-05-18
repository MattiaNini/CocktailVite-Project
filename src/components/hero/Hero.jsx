import styles from "./index.module.scss";
import Video from "../../../img/video.mp4";

const Hero = () => {
  return (
    <div className={styles.categorywrapper}>
      <video
        className={styles.drinkvideo}
        src={Video}
        playsInline
        muted
        autoPlay
        loop
      ></video>
      <h1 className={styles.excellences}>LE NOSTRE ECCELLENZE</h1>
    </div>
  );
};

export default Hero;
