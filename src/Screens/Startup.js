import React from "react";
import Button from "../Components/Button";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import TableEntryRows from "../Components/TableEntryRows";

export default function Startup({ setIsAddStartup, setIsEditStartup }) {
  const tableHeadingRow = [
    { heading: "Image" },
    { heading: "Name" },
    { heading: "Website" },
    { heading: "Industry" },
    { heading: "Startup Stage" },
    { heading: "Startup Model" },
    { heading: "" },
    { heading: "" },
    { heading: "" },
  ];

  const tableInfoRow = [
    { type: "img" },
    { info: "Fahad" },
    { info: "www.something.com" },
    { info: "Finetech" },
    { info: "Seed" },
    { info: "B2B" },

    {
      placeholder: "Edit",
      type: "btn_secondary",
      onClick: setIsEditStartup,
    },
    {
      placeholder: "Details",
      type: "btn_secondary",
      path: "/Dashboard/startup-details",
    },
    { placeholder: "Delete", type: "btn_primary", onClick: () => {} },
  ];
  return (
    <div className="main__container">
      <div className="main__container__header">
        <div className="main__container__header__heading">Startup</div>
        <div className="main__container__header__buttons">
          <Button
            placeholder="Add Startup"
            className="primary__button"
            onClick={() => {
              setIsAddStartup(true);
            }}
          />
        </div>
      </div>
      <div className="main__container__content">
        <div className="main__container__content__table">
          <TableEntryHeadings tableHeadingEntryRow={tableHeadingRow} />
          <TableEntryRows tableEntryInfoRow={tableInfoRow} />
          <TableEntryRows tableEntryInfoRow={tableInfoRow} />
          <TableEntryRows tableEntryInfoRow={tableInfoRow} />
          <TableEntryRows tableEntryInfoRow={tableInfoRow} />
          <TableEntryRows tableEntryInfoRow={tableInfoRow} />
          <TableEntryRows tableEntryInfoRow={tableInfoRow} />
          <TableEntryRows tableEntryInfoRow={tableInfoRow} />
          <TableEntryRows tableEntryInfoRow={tableInfoRow} />
          <TableEntryRows tableEntryInfoRow={tableInfoRow} />
        </div>
      </div>
    </div>
  );
}
