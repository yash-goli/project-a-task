import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  name: string;
  type: 'button' | 'submit' | 'reset';
}

const Button = ({name, type}: ButtonProps): React.ReactElement => {
  return (
    <button className={styles.button} type={type}>{name}</button>
  )
};

export default Button;