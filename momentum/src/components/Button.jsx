import React from "react";

const Button = ({ styles, children, onClick, href }) => {
  const classes = `py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`;

  if (href) {
    return (
      <a href={href} className={`${classes} inline-block`} target="_blank" rel="noopener noreferrer">
        {children || "Get Started"}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children || "Get Started"}
    </button>
  );
};

export default Button;
