import { createContext, useContext, Dispatch } from "react";
import { stateReducer } from "./stateReducer";
import { Action } from "./action";
import { useImmerReducer } from "use-immer";

interface Tasks {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Tasks[];
}

interface AppState {
  lists: List[];
}

const appData: AppState = {
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

interface AppContext {
  lists: List[];
  getTaskByListId(id: string): Tasks[];
  dispatch: Dispatch<Action>;
}

const AppStateContext = createContext<AppContext>({} as AppContext);
export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(stateReducer, appData);
  const { lists } = state;
  const getTaskByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTaskByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
