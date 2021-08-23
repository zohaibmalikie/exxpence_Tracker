
import { Provider } from 'react-redux';
import './App.css';
import { Header } from './components//Header/header.jsx';
import { AddTransaction } from './components/addTransaction/addTransaction';
import Balance from './components/currentBalance/Balance';
import TransactionHistory  from './components/history/transactionHistory';
import TransactionStatus from './components/statusTransaction/transactionStatus';
import store from './Store/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <Header/>
       <Balance/>
       <TransactionStatus/>
       <TransactionHistory/>
       <AddTransaction/>
     </div>
    </Provider>
  );
}

export default App;
