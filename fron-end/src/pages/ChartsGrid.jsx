import styles from "./ChartsGrid.module.css";
import LineChart from "../components/LineChart";
import NetIncomeProfit from "../components/NetIncomeProfit";
import ExpenseBreakdown from "../components/ExpenseBreakdown";
import ProfitMargin from "../components/ProfitMargin";
import StockBarChart from "../components/StockBarChart";
import IncomeStatementTable from "../components/Table";
import Transaction from "../components/Transaction";

function ChartsGrid() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.firstRow}>
        <LineChart />
        <NetIncomeProfit /> {/* it is working */}
      </div>
      <div className={styles.secondRow}>
        <ExpenseBreakdown />
        <ProfitMargin />
        <StockBarChart />
      </div>
      <div className={styles.thirdRow}>
        <IncomeStatementTable />
      </div>
      <Transaction />
    </div>
  );
}

export default ChartsGrid;
