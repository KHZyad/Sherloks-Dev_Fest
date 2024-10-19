import styles from "./MainDashboard.module.css";
import FinanceNumbers from "../components/FinanceNumbers";
import ChartsGrid from "./ChartsGrid";

export const MainDashboard= ()=> {
  return (
    <div className={styles.dashboardContainer}>
    <div id="gradient-bg"></div>

      <h1 className={styles.title}>Main DashBoard</h1>
      <FinanceNumbers />
      <ChartsGrid />
    </div>
  );
}

