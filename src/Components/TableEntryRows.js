import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function EntryInfoRowData({ value, variant, placeholder }) {
  if (variant === "btn_primary") {
    return (
      <div className="entry__info__row__text">
        <Button placeholder={placeholder} className="primary__button" />
      </div>
    );
  } else if (variant === "btn_secondary") {
    return (
      <div className="entry__info__row__text">
        <Button placeholder={placeholder} className="secondary__button" />
      </div>
    );
  } else {
    return (
      <div
        className="entry__info__row__text"
        style={value === "Pending" ? { color: "#FB6A3B" } : null}
      >
        {value}
      </div>
    );
  }
}

export default function TableEntryRows({ tableEntryInfoRow, path }) {
  return (
    <div className="entry__info__row">
      {tableEntryInfoRow.map((item, i) => (
        <EntryInfoRowData
          key={i}
          value={item.info}
          variant={
            item.type === "btn_secondary"
              ? "btn_secondary"
              : item.type === "btn_primary"
              ? "btn_primary"
              : item.type === "img"
              ? "img"
              : null
          }
          placeholder={item.placeholder}
        />
      ))}
    </div>
  );
}
