import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/index.css";
import App from "./App.jsx";
import { TrelloProvider } from "./contexts/TrelloContext.jsx";

createRoot(document.getElementById("root")).render(
  <TrelloProvider>
    <App />
  </TrelloProvider>
);
