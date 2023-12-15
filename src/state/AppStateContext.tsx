import { createContext, useContext, Dispatch, FC } from "react";
import { stateReducer, AppState, List, Task } from "./stateReducer";
import { Action } from "./action";
import { useImmerReducer } from "use-immer";
import { DragItem } from "../dragItem";

const appData: AppState = {
  draggedItem: null,
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [
        {
          id: "0",
          text: "Wahou! Incroyable! Une checklist! Vous pouvez créer une liste de tâches",
        },
      ],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [
        {
          id: "1",
          text: "Learn Typescript with React JS from MasterClass 2023",
        },
      ],
    },
    {
      id: "3",
      text: "Done",
      tasks: [
        {
          id: "2",
          text: "Wahou! Incroyable! Une checklist! Vous pouvez créer une liste de tâches",
        },
      ],
    },
  ],
};

interface AppStateContextProps {
  lists: List[];
  getTaskByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
  draggedItem: DragItem | null;
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(stateReducer, appData);
  const { lists, draggedItem } = state;
  const getTaskByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider
      value={{ lists, getTaskByListId, dispatch, draggedItem }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
