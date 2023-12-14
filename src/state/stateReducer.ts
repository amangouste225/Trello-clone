import { Action } from "./action";
import { nanoid } from "nanoid";
import { findItemIndexById } from "../utlis/arrayUtils";

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

export const stateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case "ADD_LIST": {
      draft.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });
      break;
    }
    case "ADD_TASK": {
      const { text, listId } = action.payload;
      const targetListIndex = findItemIndexById(draft.lists, listId);
      draft.lists[targetListIndex].tasks.push({
        id: nanoid(),
        text,
      });
      break;
    }
  }
};
