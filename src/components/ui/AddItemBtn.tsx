interface BtnProps {
  dark?: boolean;
  children: React.ReactNode;
}

export const AddItemBtn = ({ dark, children }: BtnProps) => {
  return (
    <div
      className={`max-w-[300px] p-[10px] font-bold cursor-pointer text-[14px] rounded-xl ${
        dark
          ? "bg-transparent hover:bg-listHover"
          : "w-[300px]  bg-addList text-white hover:bg-addListHover"
      } text-listText`}
    >
      {children}
    </div>
  );
};
