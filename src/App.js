import "./styles/style.css"
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import IncomePage from "./components/IncomePage";
import ExpensePage from "./components/ExpensePage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/income" element={<IncomePage/>}/>
            <Route exact path="/expense" element={<ExpensePage/>}/>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
