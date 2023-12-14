import { useState } from "react";
import { useFocus } from "../../utlis/useFocus";
interface NewItemFormProps {
  onAdd: (text: string) => void;
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  const handleAddText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAdd(text);
    }
  };
  return (
    <form
      onSubmit={() => onAdd(text)}
      className="w-[280px] flex p-3 flex-col gap-3 transform ease-in-out duration-700  items-start bg-listBackground rounded-lg"
    >
      <input
        ref={inputRef}
        className="text-white rounded-lg border-none w-full h-[35px] focus:outline-dynamicBackgroundTrans bg-listBackground px-1"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter title of your list"
        onKeyDown={handleAddText}
      />
      <button
        className="bg-newFormBtn text-black px-10 py-1 rounded-lg"
        onClick={() => onAdd(text)}
      >
        Add a list
      </button>
    </form>
  );
};
