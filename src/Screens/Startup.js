import React from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import TableEntryRows from "../Components/TableEntryRows";

export default function Startup() {
  const tableHeadingRow = [
    { heading: "Image" },
    { heading: "Name" },
    { heading: "Website" },
    { heading: "Industry" },
    { heading: "Startup Stage" },
    { heading: "Startup Model" },
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
    { placeholder: "Details", type: "btn_secondary" },
    { placeholder: "Delete", type: "btn_primary" },
  ];
  return (
    <div className="table__wrapper">
      <div className="table__wrapper__heading">Startup</div>
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
  );
}
