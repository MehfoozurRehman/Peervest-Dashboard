import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button({ placeholder, style, className, path }) {
  const navigate = useNavigate();
  return (
    <>
      <button
        type="submit"
        onClick={() => {
          navigate(path);
        }}
        className={className}
        style={style}
      >
        {placeholder}
      </button>
    </>
  );
}
