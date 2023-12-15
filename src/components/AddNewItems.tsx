import { useState } from "react";
import { NewItemForm } from "./ui/NewItemForm";

type AddNewItemProps = {
  toggleText: string;
  onAdd: (text: string) => void;
  dark?: boolean;
};

export const AddNewItems = ({ toggleText, dark, onAdd }: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <div
      className={`min-w-[280px] p-[10px] font-bold cursor-pointer text-[14px] rounded-xl mr-3 pr-4 ${
        dark
          ? "bg-transparent hover:bg-listHover"
          : "w-[280px] min-w-[280px] h-[55px] flex items-center bg-addList text-white hover:bg-addListHover"
      } text-listText`}
      onClick={() => setShowForm(true)}
    >
      {toggleText}
    </div>
  );
};
