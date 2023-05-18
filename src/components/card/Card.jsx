import styles from "./index.module.scss";
import Modal from "../modal";
import { useState } from "react";

const Card = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.Card}>
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <section className={styles.text}>
        <h2>{data.strDrink}</h2>
        <ul>
          <li>{data.strIngredient1}</li>
          <li>{data.strIngredient2}</li>
          <li>{data.strIngredient3}</li>
          <button className={styles.button} onClick={openModal}>
            Ordina
          </button>
        </ul>
      </section>
      <form className={styles.modalopening}>
        {modalOpen && <Modal onClose={closeModal} />}
      </form>
    </div>
  );
};

export default Card;
