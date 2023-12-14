import { AddNewItems } from "./AddNewItems";
import { Card } from "./Card";
import { useAppState } from "../state/useAppState";
import { addTask } from "../state/action";

interface ColumnProps {
  text: string;
  id: string;
}

export const Column = ({ text, id }: ColumnProps) => {
  const { getTaskByListId, dispatch } = useAppState();

  const tasks = getTaskByListId(id);

  return (
    <div className="columnContainer">
      <div className="columnTitle">{text} </div>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItems
        dark
        toggleText="+ Add another card"
        onAdd={(text) => dispatch(addTask(text, id))}
      />
    </div>
  );
};
