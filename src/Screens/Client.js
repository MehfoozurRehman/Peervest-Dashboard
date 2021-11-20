import React from "react";
import Button from "../Components/Button";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import TableEntryRows from "../Components/TableEntryRows";

export default function Startup() {
  const tableHeadingRow = [
    { heading: "Client Image" },
    { heading: "Client Name" },
    { heading: "" },
    { heading: "" },
  ];

  const tableInfoRow = [
    { type: "img" },
    { info: "IQ Doctor" },
    {
      placeholder: "Edit",
      type: "btn_secondary",
      path: "/",
    },
    {
      placeholder: "Delete",
      type: "btn_primary",
      path: "/",
    },
  ];
  return (
    <div className="main__container">
      <div className="main__container__header">
        <div className="main__container__header__heading">Client</div>
        <div className="main__container__header__buttons">
          <Button
            placeholder="Add Client"
            className="primary__button"
            path="/"
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
