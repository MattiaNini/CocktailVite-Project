import styles from "./index.module.scss";
import { useState } from "react";

function Modal() {
  const [showAlert, setShowAlert] = useState(false);
  const [quantity, setQuantity] = useState("");

  function alertText() {
    alert("Grazie per averci scelto: il tuo ordine è in preparazione!");
  }

  function closeAlert() {
    setShowAlert(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity !== "") {
      setShowAlert(true);
      alertText();
    }
  };

  return (
    <div className={styles.modal}>
      {showAlert && (
        <div className={styles.modalOverlay} onClick={closeAlert}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closebtn} onClick={closeAlert}>
              X
            </button>
          </div>
        </div>
      )}

      <form className={styles.modalorder} onSubmit={handleSubmit}>
        <label className={styles.enterquantity} htmlFor="quantity">
          Inserisci la quantità desiderata
        </label>
        <input
          className={styles.quantity}
          type="number"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <button
          className={styles.sendbtn}
          type="submit"
          onClick={() => {
            if (quantity !== "") {
              setShowAlert(true);
              alertText();
            }
          }}
        >
          Invia Ordine
        </button>
      </form>
    </div>
  );
}

export default Modal;
