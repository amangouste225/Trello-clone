import { AddNewItems } from "./AddNewItems";
import { Card } from "./Card";

interface ColumnProps {
  text: string;
}

export const Column = ({ text }: ColumnProps) => {
  return (
    <div className="columnContainer">
      <div className="columnTitle">{text} </div>
      <Card text="Wahou! Incroyable! Une checklist! Vous pouvez créer une liste de tâches" />
      <Card text="Wahou! Incroyable! Une checklist! Vous pouvez créer une liste de tâches.Lor" />
      <AddNewItems dark toggleText="+ Add another card" />
    </div>
  );
};
