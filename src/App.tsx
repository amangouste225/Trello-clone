import { AddNewItems } from "./components/AddNewItems";
import { Column } from "./components/Column";
import "./global.css";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/action";

function App() {
  const { lists, dispatch } = useAppState();

  return (
    <div>
      <main>
        {lists.map((list) => (
          <Column text={list.text} key={list.id} id={list.id} />
        ))}
        <AddNewItems
          toggleText="+ Add another list"
          onAdd={(text) => dispatch(addList(text))}
        />
      </main>
    </div>
  );
}

export default App;
