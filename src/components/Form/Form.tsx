import React from "react";
import { Input, Button } from "..";
import styles from './Form.module.css';

const Form = () => {
  return (
    <div className={styles.formBody}>
      <form className={styles.form}>
        <div className={styles.email}>
          <Input label="Email" name="email" placeHolder="Email" type="email" />
        </div>
        <div className={styles.password}>
          <Input label="Password" name="password" placeHolder="Password" type="password" />
        </div>
        <div className={styles.button}>
          <Button name="Submit" type="submit" />
        </div>
      </form>
    </div>
  )
};

export default Form;