import React from "react";
import styles from './Input.module.css';

interface InputProps {
  label: string;
  type: string;
  placeHolder: string;
  name: string
}

const Input = ({label, type, placeHolder, name}: InputProps): React.ReactElement => {
  return (
    <>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input className={styles.input} id={name} type={type} placeholder={placeHolder} name={name}/>
    </>
  )
};

export default Input;