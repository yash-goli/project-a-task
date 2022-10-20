import React, {FormEvent, useState} from "react";
import { Password, Email, Button } from "..";
import styles from './Form.module.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className={styles.formBody}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.email}>
          <Email setEmail={setEmail}/>
        </div>
        <div className={styles.password}>
          <Password setPassword={setPassword}/>
        </div>
        <div className={styles.button}>
          <Button name="Submit" type="submit" disabled={!email || !password} />
        </div>
      </form>
    </div>
  )
};

export default Form;