import React from "react";

const ErrorList = ({errorList} : {errorList : {message: string, valid: boolean }[]}) => {
  return (
    <>
      {errorList.map(item => (
        <div className="validity-list" key={item.message}>
          <span className={item.valid ? 'success' : 'error'}>
            {item.valid ? '✔︎' : '✘'}
          </span>
          {item.message}
        </div>
      ))}
    </>
  )
};

export default ErrorList;