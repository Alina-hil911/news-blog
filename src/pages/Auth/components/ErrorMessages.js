import React from "react";

const ErrorMessages = ({ errors }) => {
  const errorMessages = Object.keys(errors).map(name => {
    const messages = errors[name].join(" ");
    return `${name} ${messages}`;
  });
  console.log("errors", errors);
  return (
    <ul className="error-messages">
      {errorMessages.map(errorMessage => (
        <li key={errorMessage}>{errorMessage}</li>
      ))}
    </ul>
  );
};

export default ErrorMessages;
