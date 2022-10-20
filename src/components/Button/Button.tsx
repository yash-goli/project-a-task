import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  name: string;
  type: 'button' | 'submit' | 'reset';
  disabled: boolean
}

const Button = ({name, type, disabled}: ButtonProps): React.ReactElement => {
  return (
    <button data-testid="button" className={styles.button} type={type} disabled={disabled}>{name}</button>
  )
};

export default Button;