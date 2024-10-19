import styles from "./FinanceNumbers.module.css";
function FinanceNumbers() {
  return (
    <div className={styles.FinanceNumbers}>
      <div className={styles.financeTickets}>
        <div className={styles.iconBackground}>
          <img
            src="src\assets\images\hist-icon.png"
            alt="Earning icon"
            width={30}
            height={30}
          />
        </div>
        <div>
          <p className={styles.label}>Earning</p>
          <p className={styles.value}>$350.5</p>
        </div>
      </div>
      <div className={styles.financeTickets}>
        <div className={styles.iconBackground}>
          <img
            src="src\assets\images\spend-icon.png"
            alt="Earning icon"
            width={30}
            height={30}
          />
        </div>
        <div>
          <p className={styles.label}>Spend this Month</p>
          <p className={styles.value}>$682.6</p>
        </div>
      </div>
      <div className={styles.financeTicketsWithoutIcons}>
        <div className={styles.labelValue}>
          <p className={styles.label}>Sales</p>
          <p className={styles.value}>$574.34</p>
        </div>
      </div>
      <div className={styles.financeTicketsWithoutIcons}>
        <div className={styles.labelValue}>
          <p className={styles.label}>Your balance</p>
          <p className={styles.value}>$1000</p>
        </div>
      </div>
    </div>
  );
}

export default FinanceNumbers;
