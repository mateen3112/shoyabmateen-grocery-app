import React from "react";
import { Provider } from "react-redux"; 
import Home from "./components/Home";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
