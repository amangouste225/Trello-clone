import { DragItem } from "../dragItem";

export const isHidden = (
  draggedItem: DragItem | null,
  itemType: string,
  id: string
) => {
  return Boolean(
    draggedItem && draggedItem.type === itemType && draggedItem.id === id
  );
};
