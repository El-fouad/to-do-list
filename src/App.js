import { Provider } from "react-redux";
import "./App.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Reducer from "./reducer/reducer";
import Tasks from "./tasks/Tasks";
import { legacy_createStore as createStore } from "redux";

function App() {
  const store = createStore(Reducer);
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Tasks />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
