import React from "react";
import styles from "./styles.module.scss";

interface Props {
  cards: JSX.Element[];
}

interface ChildProps {
  children: JSX.Element;
}

const CardCollection = ({ cards }: Props) => {
  return (
    <div className={styles.container}>
      {cards.map((c) => (
        <CardChild key={c.props.name}>{c}</CardChild>
      ))}
    </div>
  );
};

const CardChild = ({ children }: ChildProps) => {
  return <>{children}</>;
};

export default CardCollection;
