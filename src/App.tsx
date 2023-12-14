import { AddNewItems } from "./components/AddNewItems";
import { Column } from "./components/Column";

import "./global.css";

function App() {
  return (
    <div className="container">
      <Column text="Project Ressources :" />
      <AddNewItems toggleText="+ Add another list" />
    </div>
  );
}

export default App;
