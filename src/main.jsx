import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./index.scss";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
