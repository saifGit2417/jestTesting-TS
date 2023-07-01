import React from "react";
interface Props {
  buttonText: string;
  functionText: string;
  typeOfAction: any;
}

const Button: React.FC<Props> = ({
  buttonText,
  functionText,
  typeOfAction
}) => {
  const handleAlert = () => {
    typeOfAction(functionText);
  };
  return (
    <button onClick={handleAlert}>
      {buttonText ? buttonText : "default text "}
    </button>
  );
};

export default Button;
