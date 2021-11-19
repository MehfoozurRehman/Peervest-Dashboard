import React from "react";

export default function Button({ placeholder, style, className }) {
  return (
    <>
      <button type="submit" className={className} style={style}>
        {placeholder}
      </button>
    </>
  );
}
