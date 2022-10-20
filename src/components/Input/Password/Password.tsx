import React, { useState, useMemo } from "react";
import ErrorList from "../ErrorList/ErrorList";
import { passwordValidators } from "./passwordValidators";

const Password = ({ setPassword }: { setPassword: (password: string) => void }): React.ReactElement => {
  const [validityList, setValidityList] = useState<{ message: string, valid: boolean }[]>([]);

  const validatorsFnList = useMemo(() => passwordValidators, []);

  const onHandleChange = ({ target }: { target: HTMLInputElement }) => {
    const { value } = target;
    const validity: { message: string, valid: boolean }[] = validatorsFnList.map(fn => fn(value));
    const isPasswordValid = validity.every(item => item.valid);

    if (isPasswordValid) {
      setPassword(value);
    }

    setValidityList(validity);
  };

  return (
    <>
      <label htmlFor="password">Password</label>
      <input id="password" data-testid="password" type="password" placeholder="Password" name='password' onChange={onHandleChange} />
      <ErrorList errorList={validityList}/>
    </>
  )
};

export default Password;