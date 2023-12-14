interface CardProps {
  text: string;
  id: string;
}

export const Card = ({ text }: CardProps) => {
  return <div className="cardContainer"> {text} </div>;
};
