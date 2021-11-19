import React from "react";
import TableEntryHeadings from "../Components/TableEntryHeadings";
import TableEntryRows from "../Components/TableEntryRows";

export default function Contact() {
  const tableHeadingRow = [
    { heading: "Name" },
    { heading: "Last Name" },
    { heading: "Email" },
    { heading: "DOB" },
    { heading: "Gender" },
    { heading: "Phone" },
    { heading: "Message" },
    { heading: "" },
  ];

  const tableInfoRow = [
    { info: "Fahad" },
    { info: "Ayyaz" },
    { info: "abc123@gmail.com" },
    { info: "1-4-2001" },
    { info: "Male" },
    { info: "0320-2332134" },
    { info: "View Message", type: "message" },
    { placeholder: "Delete", type: "btn_secondary" },
  ];
  return (
    <div className="table__wrapper">
      <div className="table__wrapper__heading">Contact</div>
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
