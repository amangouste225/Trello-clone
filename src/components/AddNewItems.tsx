import { AddItemBtn } from "./ui/AddItemBtn";

type AddNewItemProps = {
  toggleText: string;
  dark?: boolean;
};

export const AddNewItems = ({ toggleText, dark }: AddNewItemProps) => {
  return <AddItemBtn dark={dark}>{toggleText} </AddItemBtn>;
};
