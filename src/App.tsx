import { AddNewItems } from "./components/AddNewItems";
import { Column } from "./components/Column";
import "./global.css";
import { useAppState } from "./state/useAppState";
import { addList } from "./state/action";

function App() {
  const { lists, dispatch } = useAppState();

  return (
    <main>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItems
        toggleText="+ Add another list"
        onAdd={(text) => dispatch(addList(text))}
      />
    </main>
  );
}

export default App;
