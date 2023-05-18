import styles from "./index.module.scss";
import Card from "../card";

const Content = ({ data, setSingleItemContext }) => {
  return (
    <div className={styles.cards}>
      {data.map((cocktail) => (
        <Card data={cocktail} setSingleItemContext={setSingleItemContext} />
      ))}
    </div>
  );
};

export default Content;
