import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button({ placeholder, style, className, onclick }) {
  const navigate = useNavigate();
  return (
    <>
      <button
        type="submit"
        onClick={onclick}
        className={className}
        style={style}
      >
        {placeholder}
      </button>
    </>
  );
}
