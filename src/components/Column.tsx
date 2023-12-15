import { AddNewItems } from "./AddNewItems";
import { Card } from "./Card";
import { useAppState } from "../state/AppStateContext";
import { MoveList, addTask } from "../state/action";
import { useRef } from "react";
import { useItemDrag } from "../utils/useItemDrag";
import { throttle } from "throttle-debounce-ts";
import { useDrop } from "react-dnd";

interface ColumnProps {
  text: string;
  id: string;
  isHidden?: boolean;
}
export const Column = ({ text, id, isHidden }: ColumnProps) => {
  const { getTaskByListId, dispatch, draggedItem } = useAppState();
  const tasks = getTaskByListId(id);
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: "COLUMN", id, text });
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover: throttle(200, () => {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) {
          return;
        }
        dispatch(MoveList(draggedItem.id, id));
      }
    }),
  });

  drag(drop(ref));

  return (
    <div
      className={`columnContainer ${isHidden ? "opacity-10" : "opacity-100"} `}
      ref={ref}
    >
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
