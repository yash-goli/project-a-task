import React, {useState, useMemo} from "react";
import { emailValidators } from "./emailValidators";
import ErrorList from "../ErrorList/ErrorList";

const Email = ({setEmail}: {setEmail: (email: string) => void}): React.ReactElement => {
  const [validityList, setValidityList] = useState<{ message: string, valid: boolean }[]>([]);

  const validatorsFnList = useMemo(() => emailValidators, []);

  const onHandleChange = ({ target}: {target: HTMLInputElement}) => {
    const { value } = target;
    const validity: { message: string, valid: boolean }[] = validatorsFnList.map(fn => fn(value));
    const isEmailValid = validity.every(item => item.valid);
    
    if (isEmailValid) {
      setEmail(value);
    }

    setValidityList(validity);
  };

  return (
    <>
      <label htmlFor="email">Email</label>
      <input id="email" data-testid='email' type="email" placeholder="Email" name='email' onChange={onHandleChange}/>
      <ErrorList errorList={validityList}/>
    </>
  )
};

export default Email;