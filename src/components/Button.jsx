import React from "react";
// import PropTypes from "prop-types";

const Button = ({ size, color, bgColor, text, borderRadius }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl `}
    >
      {text}
    </button>
  );
};

// Button.propTypes = {};

export default Button;
