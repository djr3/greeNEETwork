import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button {...props}>
      {children}
      <style jsx>{`
        button {
          font-family: inherit;
          font-size: 100%;
          margin: 0;
          line-height: normal;
          text-transform: none;
          cursor: pointer;
          z-index: 2000;
        }
        button[disabled] {
          cursos: default;
        }
        button:focus {
          outline: none;
        }
      `}</style>
    </button>
  );
};

export default Button;
