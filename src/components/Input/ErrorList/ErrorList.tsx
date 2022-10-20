import React from "react";

const ErrorList = ({errorList} : {errorList : {message: string, valid: boolean }[]}) => {
  return (
    <>
      {errorList.map((item, index) => (
        <div className="validity-list" key={item.message} role="listitem">
          <span className={item.valid ? 'success' : 'error'} data-testid={`validity${index}`}>
            {item.valid ? '✔︎' : '✘'}
          </span>
          {item.message}
        </div>
      ))}
    </>
  )
};

export default ErrorList;