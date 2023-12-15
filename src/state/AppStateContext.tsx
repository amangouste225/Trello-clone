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
      text: "Next Meeting",
      tasks: [
        {
          id: "0",
          text: "Astuce Trello: 🌊 Ajoutez vos questions et sujets à aborder pour ne plus rien oublier",
        },
        {
          id: "1",
          text: "Qui peut m'aider à résoudre mon problème HTML d'alignement de texte?",
        },
      ],
    },
    {
      id: "1",
      text: "Ressources Project",
      tasks: [
        {
          id: "1",
          text: "Chronogramme du projet 'La perfection du travail en équipe'",
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
