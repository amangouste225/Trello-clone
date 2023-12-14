import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppStateProvider } from "./state/useAppState.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppStateProvider>
    <App />
  </AppStateProvider>
);
