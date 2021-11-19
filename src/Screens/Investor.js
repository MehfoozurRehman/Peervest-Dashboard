import React from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import TableEntryRows from "../Components/TableEntryRows";

export default function Investor() {
  const tableHeadingRow = [
    { heading: "Name" },
    { heading: "Email" },
    { heading: "Type" },
    { heading: "Startup Stage" },
    { heading: "Ticket Size" },
    { heading: "Industry" },
    { heading: "Business model" },
    { heading: "Plan" },
    { heading: "" },
  ];

  const tableInfoRow = [
    { info: "Fahad" },
    { info: "abc123@gmail.com" },
    { info: "New Entrant" },
    { info: "Seed" },
    { info: "<$2341" },
    { info: "Fintech" },
    { info: "B2B" },
    { info: "<5 Year" },
    { placeholder: "Delete", type: "btn_secondary" },
  ];
  return (
    <div className="table__wrapper">
      <div className="table__wrapper__heading">Investor</div>
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
