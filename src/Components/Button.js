import React from "react";

export default function Button({ placeholder, style, className, path }) {
  return (
    <>
      <button type="submit" onClick={path} className={className} style={style}>
        {placeholder}
      </button>
    </>
  );
}
