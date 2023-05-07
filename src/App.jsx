import { GlobalProvider } from "./context/GlobalState";
import Balance from "./components/Balance";
import Heder from "./components/Heder";
import TransactionForm from "./components/TransactionForm";
Heder;
TransactionForm;

function App() {
  return (
    <GlobalProvider>
      <Heder />
      <Balance />
      <TransactionForm />

      <h1>Hola mundo</h1>
    </GlobalProvider>
  );
}
export default App;
