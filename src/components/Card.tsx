interface CardProps {
  text: string;
}

export const Card = ({ text }: CardProps) => {
  return <div className="cardContainer"> {text} </div>;
};
